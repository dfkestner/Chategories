/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import { Container, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
// import "./OtherUserNameCard.css";




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function OtherUserNameCard() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };

    return (
        <div className= "ContentArea">
        <Container className="OtherUserNameCard" maxWidth="sm">
            <div className="container">
            <div className="row">
                <div className="col-4 OtherUserImage">USER IMAGE</div>
                <div className="col-4 OtherUserNamePlate">USERNAME</div>
                <div className="col-4">
                <Link to='/chat'>
                  <IconButton color="inherit" className={classes.centerButton}>
                    <ForumIcon fontSize="large"/>
                  </IconButton>
                </Link>
                </div>
            </div>
            </div>
        </Container>
        </div>
    )
}

export default OtherUserNameCard;