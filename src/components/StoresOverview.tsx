import React from 'react';
import StoreCard from './StoreCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStores } from '../hooks/useStores';

type StoresOverviewProps = {
  favoritesOnly: boolean;
};

export default function StoresOverview({ favoritesOnly = false }: StoresOverviewProps) {
  const { stores, isLoading, hasError, changeFavorite } = useStores();

  let favoriteStores = [];
  if (favoritesOnly) favoriteStores = stores.filter((store) => store.isFavorite);

  const isEmpty = isLoading || hasError || stores.length < 1;
  const loadingSuccess = !isLoading && !hasError;

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
            {hasError && (
              <Alert severity="error">Error - Bitte versuchen sie es später nochmals</Alert>
            )}
            {loadingSuccess && stores.length < 1 && (
              <Alert severity="info">Info - Keine Resultate gefunden</Alert>
            )}
            {favoritesOnly && loadingSuccess && favoriteStores.length < 1 && (
              <Alert severity="info">Keine Favoriten ausgewählt</Alert>
            )}
          </Grid>
        )}

        <Grid item xs={12} md={7} sm={7} lg={5}>
          {!isEmpty &&
            !favoritesOnly &&
            stores.map((store) => (
              <StoreCard key={store.id} store={store} changeFavorite={changeFavorite} />
            ))}
          {!isEmpty &&
            favoritesOnly &&
            favoriteStores.map((favoriteStore) => (
              <StoreCard
                key={favoriteStore.id}
                store={favoriteStore}
                changeFavorite={changeFavorite}
              />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
