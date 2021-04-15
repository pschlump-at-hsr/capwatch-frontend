import React from 'react';
import { Grid } from '@material-ui/core';
import StoreCard from './StoreCard';
import { useStores } from '../hooks/useStores';

function Favorites() {
  const { stores } = useStores();

  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          {stores
            .filter((store) => store.isFavorite === true)
            .map(
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
                  currentCapacity={store.currentCapacity}
                  maxCapacity={store.maxCapacity}
                  isFavorite={store.isFavorite}
                />
              )
            )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Favorites;
