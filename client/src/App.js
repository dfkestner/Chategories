import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./Pages/registerpage";
import DashboardPage from "./Pages/dashboard";
import IndexPage from "./Pages/indexpage";
import ChatroomPage from "./Pages/chatroompage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/chatroom/:id" component={ChatroomPage} exact />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;