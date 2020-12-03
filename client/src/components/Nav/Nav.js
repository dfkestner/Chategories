import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';

// {/* <Button color="inherit">Login</Button> */}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function Nav() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Link style={ navStyle } to="/">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HomeIcon fontSize="large"/>
                </IconButton>
                </Link>

                <Typography style={ navStyle } align="center" variant="h4" className={classes.title}>
                    CG
                </Typography>

                {/* <Link style={ navStyle } href="https://youtube.com" target="_blank"> */}
                <Link to={{ pathname: "https://youtube.com" }} target="_blank" style={ navStyle }>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HelpIcon fontSize="large"/>
                </IconButton>
                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default Nav;