import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, Divider, Grid, IconButton, Slider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Store } from '../types/store-types';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%'
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  content: {
    padding: '16px 40px 16px 40px'
  },
  favoriteIcon: {
    padding: '8px'
  },
  divider: {
    margin: '8px 0 8px 0'
  },
  slider: {
    paddingBottom: '4px'
  }
}));

export default function StoreCard({
  store,
  changeFavorite
}: {
  store: Store;
  changeFavorite: (id: string) => void;
}) {
  const classes: Classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="logo" className={classes.avatar} />}
        action={
          <IconButton
            aria-label="add to favorites"
            className={classes.favoriteIcon}
            onClick={() => changeFavorite(store.id)}
          >
            {store.isFavorite ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
        }
        title={<Typography variant="h6">{store.name}</Typography>}
        subheader={<Typography variant="body2">{store.storeType.description}</Typography>}
      />

      <Divider className={classes.divider} />

      <CardContent className={classes.content}>
        <Typography variant="body1" className={classes.sliderTitle}>
          Anzahl Besucher
        </Typography>

        <Slider
          defaultValue={store.currentCapacity}
          max={store.maxCapacity}
          valueLabelDisplay={store.currentCapacity / store.maxCapacity > 0.47 ? 'on' : 'auto'}
          className={classes.slider}
          step={null}
          marks={[{ value: store.currentCapacity, label: '' }]}
        />

        <Grid container direction="row" justify="space-between" className={classes.sliderText}>
          <Typography variant="body1">0</Typography>
          <Typography variant="body1">{store.maxCapacity}</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
