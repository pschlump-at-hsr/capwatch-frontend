import React, { useContext, useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

import { Container, CssBaseline, useMediaQuery } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

export const SearchContext = React.createContext<any | null>(null);
export const SearchProvider = ({children}) => {
  const [searchText, setSearchText] = React.useState("search");

  return(
    <SearchContext.Provider
      value={{searchText: [searchText, setSearchText]}}>
      {children}
    </SearchContext.Provider>
  )
};

function App() {
  const primaryColor = '#3F51B5';
  const secondaryColor = '#3D5AFE';

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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
        <SearchContext.Provider value={''}>
          <Header />
          <Container style={{ marginBottom: '8vh' }}>
            <AppRouter />
          </Container>
        </SearchContext.Provider>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
