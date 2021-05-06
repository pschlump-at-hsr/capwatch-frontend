import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '56px',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.primary.main
  },
  navigationItem: {
    color: '#FFF',
    opacity: 0.7,
    '&.Mui-selected': {
      color: '#FFF',
      opacity: 1
    },
    '&.MuiSvgIcon-root': {
      color: '#FFF',
      opacity: 1
    }
  }
}));

export default function Footer() {
  const classes: Classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        label="Alle"
        className={classes.navigationItem}
        icon={<VisibilityIcon className={classes.navigationItem} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites"
        label="Favoriten"
        className={classes.navigationItem}
        icon={<FavoriteIcon className={classes.navigationItem} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/nearby"
        label="In der Nähe"
        disabled
        className={classes.navigationItem}
        icon={<LocationOnIcon className={classes.navigationItem} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="Einstellungen"
        disabled
        className={classes.navigationItem}
        icon={<SettingsIcon className={classes.navigationItem} />}
      />
    </BottomNavigation>
  );
}
