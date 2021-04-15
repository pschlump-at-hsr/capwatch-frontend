import React, { useState, useEffect } from 'react';
import { getStores } from '../services/storesService';

// TODO implement this custom Hook for favorites-handling
export const useStores = () => {
  const [stores, setStores] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  function isFavorite(storeId: number) {
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString) {
      return JSON.parse(favoritesString).some((entry: { id: number }) => entry.id === storeId);
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', '[]');
  }, []);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setIsLoading(true);
        const storeData = await getStores();
        storeData.forEach((element: { id: number; isFavorite: boolean }) => {
          isFavorite(element.id) ? (element.isFavorite = true) : (element.isFavorite = false);
        });
        setStores(storeData);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStores();
  }, []);

  // useEffect(() => {
  //   stores.forEach((i: string | number) => {
  //     if (stores[i].isFavorite == true) {
  //       const favoritesString = localStorage.getItem('favorites');
  //     }
  //   });
  // }, [stores]);

  return { stores, isLoading, hasError };
};
