import React from 'react';
import StoreCard from './StoreCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStores } from '../hooks/useStores';
import { Store } from '../types/store-types';
import { makeStyles } from '@material-ui/core/styles';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '16px 0 0 0'
  }
});

export default function StoresOverview({ favoritesOnly = false }: { favoritesOnly: boolean }) {
  const classes: Classes = useStyles();

  const { stores, isLoading, hasError, changeFavorite } = useStores();

  let favoriteStores: Store[] = [];
  if (favoritesOnly) favoriteStores = stores.filter((store: Store) => store.isFavorite);

  const isEmpty = isLoading || hasError || stores.length < 1;
  const isFavoritesEmpty = favoriteStores.length < 1;
  const loadingSuccess = !isLoading && !hasError;

  return (
    <Grid container spacing={3} className={classes.root}>
      {(isEmpty || isFavoritesEmpty) && (
        <Grid container direction="column" alignItems="center" justify="center">
          {hasError && (
            <Alert severity="error">Error - Bitte versuchen sie es später nochmals</Alert>
          )}
          {loadingSuccess && stores.length < 1 && (
            <Alert severity="info">Keine Einträge gefunden</Alert>
          )}
          {!isEmpty && favoritesOnly && loadingSuccess && isFavoritesEmpty && (
            <Alert severity="info">Keine Favoriten ausgewählt</Alert>
          )}
        </Grid>
      )}

      {isEmpty && isLoading && !hasError && (
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '80vh' }}
        >
          <CircularProgress />
        </Grid>
      )}

      {!isEmpty &&
        !favoritesOnly &&
        stores.map((store: Store) => (
          <Grid key={store.id} item xs={12} md={6} lg={4}>
            <StoreCard key={store.id} store={store} changeFavorite={changeFavorite} />
          </Grid>
        ))}
      {!isEmpty &&
        favoritesOnly &&
        favoriteStores.map((favoriteStore) => (
          <Grid key={favoriteStore.id} item xs={12} md={6} lg={4}>
            <StoreCard
              key={favoriteStore.id}
              store={favoriteStore}
              changeFavorite={changeFavorite}
            />
          </Grid>
        ))}
    </Grid>
  );
}
