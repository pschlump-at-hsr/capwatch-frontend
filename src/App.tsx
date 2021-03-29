import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import React from 'react'
import SearchAppBar from './components/AppBar'
import LabelBottomNavigation from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={createMuiTheme({ typography: { fontFamily: '"Poppins", sans-serif' } })}>
      <CssBaseline />
      <SearchAppBar />
      <LabelBottomNavigation />
    </ThemeProvider>
  )
}

export default App
