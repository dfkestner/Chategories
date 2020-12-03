// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, AppBar, Toolbar, IconButton, TextField, Typography} from '@material-ui/core';
// import { Link } from 'react-router-dom';

// import ForumIcon from '@material-ui/icons/Forum';
// import HelpIcon from '@material-ui/icons/Help';
// import "./ChatTextInputArea.css";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

// function ChatTextInputArea() {
//     const classes = useStyles();

//     const navStyle = {
//         color: 'white'
//     };

//     return (
//         <div className="ContentArea">
//         <Container className="ChatTextInputArea" maxWidth="sm">
//             <div className="container">
//                 <TextField
//                     label="Username"
//                     onChange={ev => this.setState({username: ev.target.value})}
//                     value={this.state.username}
//                 />
//                 <TextField
//                     id='outlined-basic'
//                     label='Send a Message!'
//                     value={this.state.message}
//                     onChange={ev => this.setState({message: ev.target.value})}
//                 />
//                 <IconButton
//                     type='submit'
//                     className={classes.button}
//                     onClick={this.sendMessage}>
//                     <ForumIcon />
//                     Send!
//                 </IconButton>
//             </div>
//         </Container>
//         </div>
//     )
// }

// export default ChatTextInputArea;