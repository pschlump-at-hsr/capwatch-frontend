import React from 'react';
import StoreCard from './StoreCard';
import { Grid } from '@material-ui/core';

export default function Startpage() {
  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          <StoreCard />
        </Grid>
      </Grid>
    </div>
  );
}
