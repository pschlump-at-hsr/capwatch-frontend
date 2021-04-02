import React, { useEffect, useState } from 'react'
import StoreCard from './StoreCard';
import { Grid } from '@material-ui/core';
import { getStores } from '../services/storesService'

export default function Startpage() {
    // TODO Optimize type (Array<any>)
  const [stores, setStores] = useState<Array<any>>([]);

  useEffect( () => {
    const fetchStores = async () => {
      setStores(await getStores());
    };
    fetchStores();
  }, []);

  // TODO Implement loading (loading spinner) and error state (error screen)

  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          {stores.map(store => (
          <StoreCard
              key={store.id}
            name={store.name}
            currentCapacity={store.currentCapacity}
            maxCapacity={store.maxCapacity}
          />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
