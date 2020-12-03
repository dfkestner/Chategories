import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

function Footer() {
  const classes = useStyles();

  
  const navStyle = {
    color: 'white'
};

  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          
          <Link style={ navStyle } to='/search' color="inherit">
          <IconButton edge="start" color="inherit">
            <SearchIcon fontSize="large"/>
          </IconButton>     
          </Link>

          <div className={classes.grow}/>

          <Link style={ navStyle } to='/chat'>
          <IconButton color="inherit" className={classes.centerButton}>
            <ForumIcon fontSize="large"/>
          </IconButton>
          </Link>

          <div className={classes.grow}/>

          <Link style={ navStyle } to='/settings'>
          <IconButton color="inherit">
            <PersonIcon fontSize="large"/>
          </IconButton>
          </Link>

        </Toolbar>

      </AppBar>
  );
}

export default Footer;