import React from "react";

const DashboardPage = () => {
  return (
    <div className="card">
      <div className="cardHeader">Javascript</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Create a topic</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="Enter a topic"
          />
        </div>
      </div>
      <button>Create Topic</button>
      <div className="chatrooms">
        <div className="chatroom">
          <div>WTF IS A LOOP</div>
          <div className="join">CHAT</div>
        </div>
        <div className="chatroom">
          <div>PLEASE GAWD HELP ME</div>
          <div className="join">CHAT</div>
        </div>
        <div className="chatroom">
          <div>MOCHA</div>
          <div className="join">CHAT</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;