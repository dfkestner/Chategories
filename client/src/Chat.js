import React from "react";
import io from "socket.io-client";

class Chat extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      message: '',
      messages: []
    };

    this.socket = io('localhost:3001');
  }

};

export default Chat;