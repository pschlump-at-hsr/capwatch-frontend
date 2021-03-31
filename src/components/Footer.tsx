import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%'
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="home"
        value="signal"
        icon={<VisibilityIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites"
        label="Favoriten"
        value="signal"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/nearby"
        label="In der Nähe"
        value="signal"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="Einstellungen"
        value="signal"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}
