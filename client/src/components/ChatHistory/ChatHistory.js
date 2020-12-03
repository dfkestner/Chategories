/* eslint-disable no-unused-vars */
import React from 'react';
import io from 'socket.io-client';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, CardActions, TextField, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
// import "./ChatHistory.css";
import ChatTextInputArea from '../ChatTextInputArea/ChatTextInputArea';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    navStyle: {
        color: 'white'
    }
}));

class ChatHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:3001');

        this.socket.on('RECEIVE_MESSAGE', function(data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({message: ''});
        }
    }
    render () {
        return(
            <div className= "ContentArea">
            <Container className="ChatHistory" maxWidth="sm">
                <div className="container">
                <Card className="root">
                    <CardContent>
                        <Typography className="title"gutterBottom>
                        Chat Topic
                        </Typography>
                        <Typography className="pos" color="textSecondary">
                        Username
                        </Typography>
                        <Typography className="messages" variant="body2" component="p">
                        {this.state.messages.map(message => {
                            return(
                                <div>
                                    {message.author}: {message.message}
                                </div>
                            )
                        })}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <TextField
                    label="Username"
                    onChange={ev => this.setState({username: ev.target.value})}
                    value={this.state.username}
                    />
                    <TextField
                    id='outlined-basic'
                    label='Send a Message!'
                    value={this.state.message}
                    onChange={ev => this.setState({message: ev.target.value})}
                    />
                    <IconButton
                    type='submit'
                    className="button"
                    onClick={this.sendMessage}>
                    <ForumIcon />
                    Send!
                    </IconButton>
                    </CardActions>
                </Card>
                </div>
            </Container>
            </div>
        );
    }
}

export default ChatHistory;