import React, { useState, useEffect, useContext } from 'react';
import { getStores, getStoresFiltered } from '../services/storesService';
import { Store } from '../types/store-types';
import { SearchContext } from '../context/searchContext';

export const useStores = () => {
  const [stores, setStores] = useState<Array<Store>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const searchQuery = useContext<string>(SearchContext);

  const isFavorite = (storeId: string) =>
    JSON.parse(localStorage.getItem('favorites') || '{}').some((id: string) => id === storeId);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', '[]');

    const fetchStores = async () => {
      setIsLoading(true);
      try {
        let storesData: Store[];
        if (searchQuery) {
          storesData = await getStoresFiltered(searchQuery);
        } else {
          storesData = await getStores();
        }
        storesData.forEach((store: { id: string; isFavorite: boolean }) => {
          store.isFavorite = isFavorite(store.id);
        });
        setStores(storesData);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStores();
  }, [searchQuery]);

  const changeFavorite = (storeId: string) => {
    const updatedStores = stores.map((store: Store) => {
      if (store.id === storeId) {
        const initialIsFavorite = store.isFavorite;
        store.isFavorite = !initialIsFavorite;

        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        if (initialIsFavorite) {
          const index = favorites.indexOf(storeId);
          if (index >= 0) favorites.splice(index, 1);
          localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
          favorites.push(storeId);
          localStorage.setItem('favorites', JSON.stringify(favorites));
        }
      }
      return store;
    });

    setStores(updatedStores);
  };

  return { stores, isLoading, hasError, changeFavorite };
};
