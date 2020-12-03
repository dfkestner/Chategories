import React from "react";
import io from "socket.io-client";

const Chat = ({ match }) => {
  const chatId = match.params.id;
  const socket = io("http://localhost:3001", {
    query: {
      token: localStorage.getItem("CC_Token"),
    },
  });

  return <div>Chat Page</div>;
};

export default Chat;