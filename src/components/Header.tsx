import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Fade, IconButton, Input, Slide } from '@material-ui/core';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import { SearchContext } from '../context/searchContext';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: 'hidden'
  },
  searchInput: {
    color: theme.palette.common.white,
    marginLeft: 'auto'
  },
  searchInputIcon: {
    marginRight: theme.spacing(1)
  },
  searchButtonIcon: {
    position: 'absolute',
    right: theme.spacing(2)
  }
}));

export default function Header({
  setSearchQuery
}: {
  setSearchQuery: (searchQuery: string) => void;
}) {
  const classes: Classes = useStyles();

  const searchQuery = useContext<string>(SearchContext);

  const [checked, setChecked] = useState<boolean>(false);
  const searchInput = React.useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    if (checked) {
      setTimeout(() => {
        searchInput.current.focus();
      }, 150);
    }
  }, [checked]);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Fade in={true}>
          <Typography variant="h6" noWrap>
            CapWatch
          </Typography>
        </Fade>

        <Fade in={!checked}>
          <IconButton
            className={classes.searchButtonIcon}
            aria-label="search"
            color="inherit"
            onClick={() => setChecked(!checked)}
          >
            <SearchIcon />
          </IconButton>
        </Fade>

        <Slide direction="left" in={checked}>
          <Input
            id="search-input"
            disableUnderline
            margin="dense"
            placeholder="Suche..."
            inputRef={searchInput}
            onBlur={() => {
              setChecked(false);
              setSearchQuery('');
            }}
            className={classes.searchInput}
            inputProps={{
              classes: { notchedOutline: classes.searchOutline },
              startAdornment: <SearchIcon aria-label="search" className={classes.searchIcon} />
            }}
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            startAdornment={<SearchIcon aria-label="search" className={classes.searchInputIcon} />}
          />
        </Slide>
      </Toolbar>
    </AppBar>
  );
}
