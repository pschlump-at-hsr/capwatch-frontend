import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CostumerCounter from './CostumerCounter';
import { Grid } from '@material-ui/core';
import CapacityDisplay from './CapacityDisplay';

const useStyles = makeStyles({
  root: {
    margin: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function StoreCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Migros Säntispark
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Detailhändler
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container justify="center">
          <Grid item xs={6} md={6} sm={6}>
            <CostumerCounter />
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <CapacityDisplay />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
