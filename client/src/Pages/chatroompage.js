import React from "react";
import io from "socket.io-client";

const ChatroomPage = ({ match }) => {
  const chatroomId = match.params.id;
  const socket = io("http://localhost:3001", {
    query: {
      token: localStorage.getItem("CC_Token"),
    },
  });

  return <div>Chatroom Page</div>;
};

export default ChatroomPage;