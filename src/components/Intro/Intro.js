import React from "react";
import "./Intro.css";
import profilePic from "../../assets/profile.jpg";

export default function Intro() {
  return (
    <div id="intro" className="intro">
      <img src={profilePic} alt="placeholder" />
      <h1>Jake O&apos;Toole</h1>
      <p>
        Certified Full Stack Web Developer looking to utilize their new found
        skills.
      </p>
    </div>
  );
}
