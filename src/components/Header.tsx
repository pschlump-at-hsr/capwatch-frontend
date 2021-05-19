import React, { ChangeEvent, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Box, FormControl, Input, InputAdornment } from '@material-ui/core';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import clsx from 'clsx';
import { SearchContext } from '../context/searchContext';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme: Theme) => ({
  toolbarButtons: {
    marginLeft: 'auto'
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    "& $notchedOutline": {
      borderColor: theme.palette.common.white
    },
    notchedOutline: {}
  },
  searchTextField: {
    color: theme.palette.common.white
  },
  outlinedInputClasses: {
    color: theme.palette.common.white
  }
}));

export default function Header({
  setSearchQuery
}: {
  setSearchQuery: (searchQuery: string) => void;
}) {
  const searchQuery = useContext(SearchContext);
  const classes: Classes = useStyles();

  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" noWrap>
          CapWatch
        </Typography>
        <form className={clsx(classes.toolbarButtons, classes.textField)}>
          <FormControl variant="outlined" className={clsx(classes.formControl, classes.margin)}>
            <InputLabel className={clsx(classes.searchTextField)}>
              Suche...
            </InputLabel>
            <OutlinedInput className={clsx(classes.outlinedInputClasses)}
              id="search-input"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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
        </form>
      </Toolbar>
    </AppBar>
  );
}
