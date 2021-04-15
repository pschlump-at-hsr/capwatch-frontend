import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, Grid, IconButton, Slider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStores } from '../hooks/useStores';

const useStyles = makeStyles({
  root: {
    margin: 17
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  position: {
    marginBottom: 12
  },
  card: {
    border: 'solid'
  },
  cardTitle: {
    paddingRight: 0,
    paddingLeft: 2,
    paddingTop: 17
  },
  avatar: {
    padding: 0
  },
  favoriteIcon: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  slider: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
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
  const bull = <span className={classes.bullet}>•</span>;

  type CustomCardContentProps = {
    title: string;
    capacity: number;
  };

  function CustomCardContent({ title, capacity }: CustomCardContentProps) {
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography className={classes.position} color="textSecondary">
            {capacity}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  type CardSliderContentProps = {
    currentCapacity: number;
    maxCapacity: number;
  };
  function CardSliderContent({ currentCapacity, maxCapacity }: CardSliderContentProps) {
    return (
      <Slider
        style={{ padding: '20px' }}
        defaultValue={currentCapacity}
        disabled={true}
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="on"
      />
    );
  }

  return (
    <Grid container justify="center">
      <Card className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={2} sm={2}>
            <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatar}></Avatar>} />
          </Grid>

          <Grid item xs={6} sm={6}>
            <CardContent className={classes.cardTitle}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={2} sm={2}>
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

        <CardContent className={classes.slider}>
          <Grid container justify="center" xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={12}>
              <CardSliderContent currentCapacity={currentCapacity} maxCapacity={maxCapacity} />
            </Grid>
          </Grid>
          {/*<Grid container justify="center">*/}
          {/*  <Grid item xs={6} sm={6} md={6}>*/}
          {/*    <CustomCardContent title="Anzahl Besucher" capacity={currentCapacity} />*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={6} sm={6} md={6}>*/}
          {/*    <CustomCardContent title="Erlaubte Anzahl" capacity={maxCapacity} />*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
        </CardContent>
      </Card>
    </Grid>
  );
}
