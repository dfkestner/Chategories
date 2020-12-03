import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./Pages/registerpage";
import Home from "./Pages/Home";
import IndexPage from "./Pages/indexpage";
<<<<<<< HEAD
import Chat from "./Pages/Chat";
import Search from "./Pages/Search";
import Settings from "./Pages/Settings";
import Chategorie from "./Pages/Chategorie";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";



=======
import TopicPage from "./Pages/topicpage";
>>>>>>> 3de96b78670c26f2bf4a45b41238485b862d3364

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
<<<<<<< HEAD
        <Route path="/home" component={Home} exact />
        <Route path="/chat/:id" component={Chat} exact />
        <Route exact path="/search" component={Search}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/chategorie" component={Chategorie}/>
=======
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/topic/:id" component={TopicPage} exact />
        
>>>>>>> 3de96b78670c26f2bf4a45b41238485b862d3364
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;