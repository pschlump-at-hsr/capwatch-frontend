import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
  isFavorite
}: StoreCardProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [clicked, setClicked] = useState(isFavorite);

  // TODO remove handler Function an use custom Hook instead
  const handleFavoriteClick = () => {
    setClicked((prevClicked) => {
      isFavorite = !prevClicked;
      if (isFavorite) {
        const favoritesString = localStorage.getItem('favorites');
        if (favoritesString) {
          const parsedEntries = JSON.parse(favoritesString);
          const newFavoriteStoreEntry = {
            id: id
          };
          parsedEntries.push(newFavoriteStoreEntry);
          localStorage.setItem('favorites', JSON.stringify(parsedEntries));
        }
      } else {
        const favoritesString = localStorage.getItem('favorites');
        if (favoritesString) {
          const parsedEntries = JSON.parse(favoritesString);
          const updatedEntries = parsedEntries
            .filter((stores: { id: number }) => stores.id != id)
            .map((stores: any) => stores);
          localStorage.setItem('favorites', JSON.stringify(updatedEntries));
        }
      }
      return !prevClicked;
    });
  };

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
            <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
              {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
