import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import React from 'react'
import SearchAppBar from './components/AppBar'

function App() {
  return (
    <ThemeProvider theme={createMuiTheme({ typography: { fontFamily: '"Poppins", sans-serif' } })}>
      <CssBaseline />
      <SearchAppBar />
    </ThemeProvider>
  )
}

export default App
