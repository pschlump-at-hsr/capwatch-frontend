import React from 'react';
import { Grid } from '@material-ui/core';
import StoreCard from './StoreCard';
import { useStores } from '../hooks/useStores';
import { Alert } from '@material-ui/lab';

function Favorites() {
  const { stores, changeFavorite } = useStores();

  const favoriteStores = stores.filter((store) => store.isFavorite);

  return (
    <div className="content">
      <Grid container>
        {/*  TODO improve time of message rendering (shortly viewable at component loading*/}
        {favoriteStores.length < 1 && (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Alert severity="info">Info - Keine Stores gefunden</Alert>
          </Grid>
        )}
        <Grid item xs={12} md={7} sm={7} lg={5}>
          {favoriteStores.length > 0 &&
            favoriteStores.map(
              (store: {
                id: number;
                name: string;
                currentCapacity: number;
                maxCapacity: number;
                isFavorite: boolean;
              }) => (
                <StoreCard
                  key={store.id}
                  id={store.id}
                  name={store.name}
                    // TODO change this to value from
                  type={/*store.type.description*/ 'Type'}
                  currentCapacity={store.currentCapacity}
                  maxCapacity={store.maxCapacity}
                  isFavorite={store.isFavorite}
                  changeFavorite={changeFavorite}
                />
              )
            )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Favorites;
