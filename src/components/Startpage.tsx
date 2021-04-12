import React, { useEffect, useState } from 'react';
import StoreCard from './StoreCard';
import { Grid } from '@material-ui/core';
import { getStores } from '../services/storesService';

export default function Startpage() {
  // TODO Optimize type (Array<any>)
  const [stores, setStores] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchStores = async () => {
      setStores(await getStores());
    };
    fetchStores();
  }, []);

  useEffect(() => {
    localStorage.setItem('stores', JSON.stringify(stores));
  }, [stores]);

  useEffect(() => {
    if (localStorage.getItem('favorites') === null) {
      localStorage.setItem('favorites', '[]');
    }
  }, []);

  function isFavorite(storeId: number) {
    const existingFavoriteEntries = localStorage.getItem('favorites') as string;
    const parsedEntries = JSON.parse(existingFavoriteEntries);
    return parsedEntries.some((v: { id: number }) => v.id === storeId);
  }

  // TODO Implement loading (loading spinner) and error state (error screen)

  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          {stores.map((store) => (
            <StoreCard
              key={store.id}
              id={store.id}
              name={store.name}
              currentCapacity={store.currentCapacity}
              maxCapacity={store.maxCapacity}
              isFavorite={isFavorite(store.id)}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
