import React from 'react';
import SearchAppBar from './components/AppBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif'
    },
    palette: {
      primary: {
        main: '#3F51B5'
      },
      secondary: {
        main: '#3F51B5'
      }
    }
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
