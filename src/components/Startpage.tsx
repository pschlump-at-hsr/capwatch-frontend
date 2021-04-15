import React from 'react';
import StoreCard from './StoreCard';
import { Grid } from '@material-ui/core';
import { useStores } from '../hooks/useStores';

export default function Startpage() {
  // TODO Optimize type (Array<any>)
  const { stores } = useStores();

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
              isFavorite={store.isFavorite}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
