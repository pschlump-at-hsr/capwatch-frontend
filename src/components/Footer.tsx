import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '56px',
    width: '100%',
    background: theme.palette.primary.main
  },
  navigationIcon: {
    color: theme.palette.primary.contrastText
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Alle"
        value="signal"
        className={classes.navigationIcon}
        icon={<VisibilityIcon className={classes.navigationIcon} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites"
        label="Favoriten"
        value="signal"
        className={classes.navigationIcon}
        icon={<FavoriteIcon className={classes.navigationIcon} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/nearby"
        label="In der Nähe"
        value="signal"
        disabled
        className={classes.navigationIcon}
        icon={<LocationOnIcon className={classes.navigationIcon} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="Einstellungen"
        value="signal"
        disabled
        className={classes.navigationIcon}
        icon={<SettingsIcon className={classes.navigationIcon} />}
      />
    </BottomNavigation>
  );
}
