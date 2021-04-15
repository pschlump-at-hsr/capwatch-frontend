import React, { useState, useEffect } from 'react';
import { getStores } from '../services/storesService';

// TODO implement this custom Hook for favorites-handling
export const useStores = () => {
  const [stores, setStores] = useState<Array<any>>();

  function isFavorite(storeId: number) {
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString) {
      return JSON.parse(favoritesString).some((entry: { id: number }) => entry.id === storeId);
    }
  }

  useEffect(() => {
    const fetchStores = async () => {
      const storeData = await getStores();
      storeData.forEach((element: { id: number; isFavorite: boolean }) => {
        console.log(element);
        isFavorite(element.id) ? (element.isFavorite = true) : (element.isFavorite = false);
      });
      setStores(storeData);
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

  return { stores, setStores };
};
