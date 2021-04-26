import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Favorites from './components/Favorites';
import Startpage from './components/Startpage';

export default function AppRouter() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Startpage} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/nearby">
          <h1>In der Nähe noch nicht verfügbar</h1>
        </Route>
        <Route exact path="/settings">
          <h1>Einstellungen noch nicht verfügbar</h1>
        </Route>
        {/*Backup Route*/}
        <Route path="/" component={Startpage} />
      </Switch>
    </div>
  );
}
