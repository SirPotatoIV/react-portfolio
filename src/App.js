import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import "./App.css";
import CurrentWork from "./components/CurrentWork";

function App() {
  return (
    <div className="container">
      <Navbar className="navbar" />
      <div className="content">
        <Intro id="intro" />
        <CurrentWork />
      </div>
      {/* <div className="footer">
        <p>Footer</p>
      </div> */}
    </div>
  );
}

export default App;
