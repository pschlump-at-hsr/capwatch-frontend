import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, Grid, IconButton, Slider } from '@material-ui/core';
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
    paddingRight: 0,
    paddingLeft: 8,
    paddingTop: 16
  },
  favoriteIcon: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
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

      <Card className={classes.root} >
        <Grid container justify="space-between">
          <Grid item xs={2}>
            <CardHeader avatar={<Avatar aria-label="recipe"/>} />
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

        <CardContent >
          <Grid container justify="center">
            <Slider
              defaultValue={currentCapacity}
              max={maxCapacity}
              disabled={true}
              aria-labelledby="discrete-slider-always"
              step={1}
              valueLabelDisplay="on"
            />
          </Grid>
        {/*  <Grid container justify="center">
            <Grid item xs={6} sm={6} md={6}>
              <CustomCardContent title="Anzahl Besucher" capacity={currentCapacity} />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <CustomCardContent title="Erlaubte Anzahl" capacity={maxCapacity} />
            </Grid>
          </Grid>*/}
        </CardContent>
      </Card>
    </Grid>
  );
}
