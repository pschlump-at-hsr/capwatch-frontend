import React, { useState, useEffect } from 'react';
import { getStores } from '../services/storesService';

// TODO implement this custom Hook for favorites-handling
export const useStores = () => {
  const [stores, setStores] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  function isFavorite(storeId: number) {
    // TODO fix type error
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      return favorites.some((id: number) => id === storeId);
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', '[]');

    const fetchStores = async () => {
      setIsLoading(true);
      try {
        const storesData = await getStores();
        storesData.map((store: { id: number; isFavorite: boolean }) => {
          isFavorite(store.id) ? (store.isFavorite = true) : (store.isFavorite = false);
        });
        setStores(storesData);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    // TODO remove timeout for production
    //setTimeout(function () {
    fetchStores();
    // }, 1500);
  }, []);

  const changeFavorite = (storeId: number) => {
    setStores(
      stores.map((store) => {
        if (store.id === storeId) {
          const initialIsFavorite = store.isFavorite;
          store.isFavorite = !initialIsFavorite;
          const favorites = JSON.parse(localStorage.getItem('favorites'));
          if (initialIsFavorite) {
            const index = favorites.indexOf(storeId);
            if (index >= 0) {
              favorites.splice(index, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
          } else {
            favorites.push(storeId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
          }
        }

        return store;
      })
    );
  };

  return { stores, isLoading, hasError, changeFavorite };
};
