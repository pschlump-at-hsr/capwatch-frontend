import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import StoreCard from './StoreCard';

function Favorites() {
  const [stores, setStores] = useState(() => {
    const localData = localStorage.getItem('favorites');
    return localData !== null ? JSON.parse(localData) : [];
  });

  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          {stores.map(
            (store: { id: number; name: string; currentCapacity: number; maxCapacity: number }) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                currentCapacity={store.currentCapacity}
                maxCapacity={store.maxCapacity}
                isFavorite={true}
              />
            )
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Favorites;
