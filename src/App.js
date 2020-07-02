import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar className="navbar" />
      <div className="header"></div>
      <div className="content">
        <Intro id="intro" />
        <Skills id="skills" />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
