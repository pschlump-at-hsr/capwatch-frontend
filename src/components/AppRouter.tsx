import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import React from 'react'

export default function AppRouter() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <h1> Keine Einträge vorhanden.</h1>
          </Route>
          <Route exact path="/favorites">
            <h1> Favoriten </h1>
          </Route>
          <Route exact path="/nearby">
            <h1>In der Nähe</h1>
          </Route>
          <Route exact path="/settings">
            <h1>Einstellungen</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
