import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Users from "./routes/Users";
import Sidenav from "./components/Sidenav";
import Intro from "./components/Intro";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <Sidenav id="sidenav" /> */}
        <div className="header"></div>
        <div className="main">
          <Sidenav className="sidenav" />
          <div className="content">
            <Intro />
            <Intro />
            {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch> */}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
