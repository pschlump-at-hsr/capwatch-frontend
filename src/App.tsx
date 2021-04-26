import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h5: {
        fontWeight: 500
      },
      body1: {
        fontWeight: 600
      }
    },
    palette: {
      primary: {
        main: '#3F51B5'
      },
      secondary: {
        main: '#3D5AFE'
      }
    },
    overrides: {
      MuiSlider: {
        thumb: {
          color: '#3F51B5'
        },
        track: {
          color: '#3F51B5'
        },
        rail: {
          color: '#3F51B5'
        }
      }
    }
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
