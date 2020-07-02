import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Jake O&apos;Toole</h1>
      </div>
      <ul className="links">
        <li>Intro</li>
        <li>Contact</li>
        <li>Portfolio</li>
      </ul>
    </div>
  );
}
