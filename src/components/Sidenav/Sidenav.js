import { render } from "@testing-library/react";

import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <ul>
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
      </ul>
    </div>
  );
}
