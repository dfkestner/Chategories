import React from "react";
import jwt_decode from "jwt-decode";
const Home = () => {
const token = localStorage.getItem("CC_Token");
const decoded = jwt_decode(token);
 
console.log(decoded);
  return (
    <h1>This is the HOME page</h1>
  );
};

export default Home;