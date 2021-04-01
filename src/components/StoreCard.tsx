import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

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
  },
  card: {
    border: 'solid'
  }
});

type StoreCardProps = {
  name: string;
  maxCapacity: number;
  currentCapacity: number;
};

export default function StoreCard({ name, maxCapacity, currentCapacity }: StoreCardProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container justify="center">
          <Grid item xs={6} md={6} sm={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Anzahl Besucher
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {currentCapacity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Erlaubte Anzahl
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {maxCapacity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
