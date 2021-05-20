import { useState, useEffect, useContext } from 'react';
import { getStores, getStoresFiltered } from '../services/storesService';
import { Store } from '../types/store-type';
import { SearchContext } from '../context/searchContext';

export const useStores = () => {
  const SEARCH_DELAY = 300;

  const [stores, setStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const searchQuery = useContext<string>(SearchContext);

  const isFavorite = (storeId: string, favorites: Array<Store>) =>
    favorites.some((value: Store) => value.id === storeId);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', '[]');

    let timeoutFunction: NodeJS.Timeout;

    const fetchStores = async () => {
      setIsLoading(true);

      let storesData: Store[];
      const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');

      try {
        if (searchQuery) {
          timeoutFunction = setTimeout(async () => {
            storesData = await getStoresFiltered(searchQuery);
            storesData.forEach((store: { id: string; isFavorite: boolean }) => {
              store.isFavorite = isFavorite(store.id, favorites);
            });
            setStores(storesData);
          }, SEARCH_DELAY);
        } else {
          storesData = await getStores();
          storesData.forEach((store: { id: string; isFavorite: boolean }) => {
            store.isFavorite = isFavorite(store.id, favorites);
          });
          setStores(storesData);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStores().then(() => true);

    return () => clearTimeout(timeoutFunction);
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
        } else {
          favorites.push(storeId);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      return store;
    });

    setStores(updatedStores);
  };

  return { stores, isLoading, hasError, changeFavorite };
};
