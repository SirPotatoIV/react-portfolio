import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Users from "./routes/Users";
import Sidenav from "./components/Sidenav";
import "./App.css";

function App() {
  return (
    <Router>
      <div id="app">
        <Sidenav id="sidenav" />
        <Switch id="main">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
