import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Favorites from './components/Favorites';
import Startpage from './components/Startpage';
import { Alert } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  infoBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh'
  }
});

export default function AppRouter() {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/" component={Startpage} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/nearby">
        <Box className={classes.infoBox}>
          <Alert severity="info">In der Nähe noch nicht verfügbar.</Alert>
        </Box>
      </Route>
      <Route exact path="/settings">
        <Box className={classes.infoBox}>
          <Alert severity="info">Einstellungen noch nicht verfügbar.</Alert>
        </Box>
      </Route>
      {/*Backup Route*/}
      <Route path="/" component={Startpage} />
    </Switch>
  );
}
