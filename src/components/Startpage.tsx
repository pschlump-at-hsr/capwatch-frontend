import React from 'react';
import StoreCard from './StoreCard';
import { Grid } from '@material-ui/core';

export default function Startpage() {
  const sampleCard = {
    name: 'Migros St. Gallen',
    maxCapacity: 180,
    currentCapacity: 70
  };
  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          <StoreCard
            name={sampleCard.name}
            currentCapacity={sampleCard.currentCapacity}
            maxCapacity={sampleCard.maxCapacity}
          />
        </Grid>
      </Grid>
    </div>
  );
}
