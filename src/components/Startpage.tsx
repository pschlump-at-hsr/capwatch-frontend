import React from 'react';
import StoreCard from './StoreCard';
import { CircularProgress, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStores } from '../hooks/useStores';

export default function Startpage() {
  const { stores, isLoading, hasError, changeFavorite } = useStores();

  const isEmpty = isLoading || hasError || stores.length < 1;

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
            {!isLoading && !hasError && stores.length < 1 && (
              <Alert severity="info">Info - Keine Stores gefunden</Alert>
            )}
          </Grid>
        )}

        <Grid item xs={12} md={7} sm={7} lg={5}>
          {!isEmpty &&
            [...stores, ...stores].map((store) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                type={'store.type.description'}
                currentCapacity={store.currentCapacity}
                maxCapacity={store.maxCapacity}
                isFavorite={store.isFavorite}
                changeFavorite={changeFavorite}
              />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
