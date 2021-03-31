import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route } from 'react-router-dom'

import React from 'react'
import SearchAppBar from './components/AppBar'
import Footer from './components/Footer'
import AppRouter from './AppRouter'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        theme={createMuiTheme({ typography: { fontFamily: '"Poppins", sans-serif' } })}
      >
        <CssBaseline />
        <SearchAppBar />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
