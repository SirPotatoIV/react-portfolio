import { render } from "@testing-library/react";

import React from "react";
// import { Link } from "react-router-dom";
import "./Sidenav.css";

// https://html.com/anchors-links/#Specify_a_Hyperlink_Target_href

export default function Sidenav() {
  return (
    <div className="sidenav">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="/portfolio">My Work</a>
        </li>
        <li>
          <a href="/contact">Get Connected</a>
        </li>
      </ul>
    </div>
  );
}
