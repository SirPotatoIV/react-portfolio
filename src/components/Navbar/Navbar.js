import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Jake O&apos;Toole</h1>
      </div>
      <ul className="links">
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#contract">Contract</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
