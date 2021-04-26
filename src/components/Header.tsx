import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core'
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses'

const useStyles = makeStyles(() => ({
  toolbarButtons: {
    marginLeft: 'auto'
  }
}));

export default function Header() {
  const classes: Classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            CapWatch
          </Typography>
          <Box className={classes.toolbarButtons}>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
