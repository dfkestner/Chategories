import React from "react";
import io from "socket.io-client";

const TopicPage = ({ match }) => {
  // eslint-disable-next-line no-unused-vars
  const topicId = match.params.id;
  // eslint-disable-next-line no-unused-vars
  const socket = io("http://localhost:3001", {
    query: {
      token: localStorage.getItem("CC_Token"),
    },
  });

  return <div>Topic Page</div>;
};

export default TopicPage;