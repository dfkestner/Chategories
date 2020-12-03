import React from "react";
import jwt_decode from 'jwt-decode';

const DashboardPage = () => {
  const token = localStorage.getItem("CC_Token");
  const decoded = jwt_decode(token);
    console.log(decoded);
  return (
    <div className="card">
      <div className="cardHeader">Javascript</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="topicName">Create a topic</label>
          <input
            type="text"
            name="topicName"
            id="topicName"
            placeholder="Enter a topic"
          />
        </div>
      </div>
      <button>Create Topic</button>
      <div className="topics">
        <div className="topic">
          <div>WTF IS A LOOP</div>
          <div className="join">CHAT</div>
        </div>
        <div className="topic">
          <div>PLEASE GAWD HELP ME</div>
          <div className="join">CHAT</div>
        </div>
        <div className="topic">
          <div>MOCHA</div>
          <div className="join">CHAT</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;