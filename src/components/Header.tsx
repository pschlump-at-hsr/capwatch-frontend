import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Box, FormControl, Input, InputAdornment } from '@material-ui/core';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import clsx from 'clsx';
import { SearchContext } from '../context/searchContext';

const useStyles = makeStyles(() => ({
  toolbarButtons: {
    marginLeft: 'auto'
  }
}));

export default function Header() {
  const [searchQuery, setSearchQuery] = useContext(SearchContext);

  const classes: Classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          CapWatch
        </Typography>
        <Box className={classes.toolbarButtons}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <Input
              id="search-input"
              value={searchQuery}
              onChange={(e) => {
                // TODO fix that type error
                setSearchQuery(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  {' '}
                  <IconButton aria-label="search" color="inherit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
