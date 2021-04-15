import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStores } from '../hooks/useStores';

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
  id: number;
  name: string;
  maxCapacity: number;
  currentCapacity: number;
  isFavorite: boolean;
};

export default function StoreCard({
  id,
  name,
  maxCapacity,
  currentCapacity,
  isFavorite,
  changeFavorite
}: StoreCardProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container justify="center">
        <Grid item xs={6} md={8} sm={10}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardContent>
            <IconButton aria-label="add to favorites" onClick={() => changeFavorite(id)}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardContent>
        </Grid>
      </Grid>
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
