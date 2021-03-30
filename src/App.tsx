import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react'
import SearchAppBar from './components/AppBar'
import LabelBottomNavigation from './components/Footer'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <ThemeProvider theme={createMuiTheme({ typography: { fontFamily: '"Poppins", sans-serif' } })}>
      <CssBaseline />
      <SearchAppBar />
      <Router>
        <AppRouter />
        <LabelBottomNavigation />
      </Router>
    </ThemeProvider>
  )
}

export default App
