import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./Pages/registerpage";
import Home from "./Pages/Home";
import IndexPage from "./Pages/indexpage";
import Chat from "./Pages/Chat";
import Search from "./Pages/Search";
import Settings from "./Pages/Settings";
import Chategorie from "./Pages/Chategorie";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/chat/:id" component={Chat} exact />
        <Route exact path="/search" component={Search}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/chategorie" component={Chategorie}/>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;