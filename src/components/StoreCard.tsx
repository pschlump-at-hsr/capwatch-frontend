import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box, CardHeader, Divider, Grid, IconButton, Slider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    margin: '24px 24px 0 24px',
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  position: {
    marginBottom: 12
  },
  card: {
    border: 'solid'
  },
  cardTitle: {
    padding: '16px 0 0 8px'
  },
  favoriteIcon: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  divider: {
    margin: '4px 0 32px 0'
  }
});

type StoreCardProps = {
  id: number;
  name: string;
  maxCapacity: number;
  currentCapacity: number;
  isFavorite: boolean;
  changeFavorite: Function;
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

  return (
    <Grid container>
      <Card className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={2}>
            <CardHeader avatar={<Avatar aria-label="recipe" />} />
          </Grid>

          <Grid item xs={8}>
            <CardContent className={classes.cardTitle}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={2}>
            <CardContent className={classes.favoriteIcon}>
              <IconButton
                aria-label="add to favorites"
                size="medium"
                onClick={() => changeFavorite(id)}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </CardContent>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <CardContent>
          <Grid container justify="center">
            <Slider
              disabled
              step={1}
              aria-labelledby="discrete-slider"
              defaultValue={currentCapacity}
              max={maxCapacity}
              valueLabelDisplay="on"
            />
          </Grid>

          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{maxCapacity}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
