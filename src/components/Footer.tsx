import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import VisibilityIcon from '@material-ui/icons/Visibility'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SettingsIcon from '@material-ui/icons/Settings'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%'
  }
})

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue)
  }

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Alle"
          value="all"
          icon={<VisibilityIcon />}
          component={Link}
          exact
          to="/"
        />
        <BottomNavigationAction
          label="Favoriten"
          value="favorites"
          icon={<FavoriteIcon />}
          component={Link}
          exact
          to="/favorites"
        />
        <BottomNavigationAction
          label="In der Nähe"
          value="nearby"
          icon={<LocationOnIcon />}
          component={Link}
          to="/nearby"
        />
        <BottomNavigationAction
          label="Einstellungen"
          value="settings"
          icon={<SettingsIcon />}
          component={Link}
          to="/settings"
        />
      </BottomNavigation>
    </Router>
  )
}
