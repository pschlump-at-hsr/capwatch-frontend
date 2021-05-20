import React from 'react';
import StoreCard from './StoreCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStores } from '../hooks/useStores';
import { Store } from '../types/store-type';
import { makeStyles } from '@material-ui/core/styles';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '16px 0 0 0',
    padding: '0 0 16px 0'
  },
  circularProgress: {
    minHeight: '80vh'
  }
});

export default function StoresOverview({
  favoritesOnly = false
}: {
  favoritesOnly: boolean;
}): JSX.Element {
  const classes: Classes = useStyles();

  const ERROR_MESSAGE = 'Error - Bitte versuchen sie es später nochmals';
  const EMPTY_MESSAGE = 'Keine Einträge gefunden';
  const NO_FAVORITES_MESSAGE = 'Keine Favoriten gefunden';

  const { stores, isLoading, hasError, changeFavorite } = useStores();

  let favoriteStores: Store[] = [];
  if (favoritesOnly) favoriteStores = stores.filter((store: Store) => store.isFavorite);

  const isEmpty = isLoading || hasError || stores.length < 1;
  const favoritesIsEmpty = favoriteStores.length < 1;
  const loadingSuccess = !isLoading && !hasError;

  return (
    <Grid container spacing={3} className={classes.root}>
      {(isEmpty || favoritesIsEmpty) && (
        <Grid container direction="column" alignItems="center" justify="center">
          {hasError && <Alert severity="error">{ERROR_MESSAGE}</Alert>}
          {loadingSuccess && stores.length < 1 && <Alert severity="info">{EMPTY_MESSAGE}</Alert>}
          {favoritesOnly && !isEmpty && loadingSuccess && favoritesIsEmpty && (
            <Alert severity="info">{NO_FAVORITES_MESSAGE}</Alert>
          )}
        </Grid>
      )}

      {isEmpty && isLoading && !hasError && (
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.circularProgress}
        >
          <CircularProgress />
        </Grid>
      )}

      {!favoritesOnly &&
        !isEmpty &&
        stores.map((store: Store) => (
          <Grid key={store.id} item xs={12} md={6} lg={4}>
            <StoreCard key={store.id} store={store} changeFavorite={changeFavorite} />
          </Grid>
        ))}
      {favoritesOnly &&
        !isEmpty &&
        favoriteStores.map((favoriteStore: Store) => (
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
