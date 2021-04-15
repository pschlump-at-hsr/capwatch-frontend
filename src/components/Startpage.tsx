import React, { useEffect, useState } from 'react';
import StoreCard from './StoreCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { getStores } from '../services/storesService';

export default function Startpage() {
  // TODO Optimize type (Array<any>)
  const [stores, setStores] = useState<Array<any>>([]);

  const isLoading = false;
  const hasError = false;

  const isEmpty = isLoading || hasError || stores.length < 1;

  useEffect(() => {
    const fetchStores = async () => {
      setStores(await getStores());
    };
    fetchStores();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', '[]');
  }, []);

  function isFavorite(storeId: number) {
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString) {
      return JSON.parse(favoritesString).some((entry: { id: number }) => entry.id === storeId);
    }
  }

  return (
    <div className="content">
      <Grid container>
        {isEmpty && (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            {isLoading && !hasError && <CircularProgress />}
            {hasError && <Alert severity="error">Error - Please try again later</Alert>}
          </Grid>
        )}

        <Grid item xs={12} md={7} sm={7} lg={5}>
          {!isEmpty &&
            stores.map((store) => (
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
