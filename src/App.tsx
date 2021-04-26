import React, { useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

import { Container, CssBaseline, useMediaQuery } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const primaryColor = '#3F51B5';
  const secondaryColor = '#3D5AFE';

  const prefersDarkMode = !useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: '"Poppins", sans-serif',
          h5: {
            fontWeight: 500
          }
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: primaryColor
          },
          secondary: {
            main: secondaryColor
          }
        },
        overrides: {
          MuiSlider: {
            thumb: {
              color: primaryColor
            },
            track: {
              color: primaryColor
            },
            rail: {
              color: primaryColor
            }
          }
        }
      }),
    [prefersDarkMode]
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container style={{ marginBottom: '8vh' }}>
          <AppRouter />
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
