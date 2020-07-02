import React from "react";
import "./CurrentWork.css";

const positions = [
  {
    company: "Trilogy Education Services Full Stack Boot Camp",
    title:
      "Substitute Teaching Assistant / Central Grader / Learning Assistant",
    summary: "Fill out later",
    link: "https://www.google.com",
  },
  {
    company: "Esther Agbaje for State Representative Committee",
    title: "Website Manager",
    summary: "Fill out later",
    link: "https://www.google.com",
  },
  {
    company: "Blockbins",
    title: "Contract Full Stack Web Developer",
    summary: "Fill out later",
    link: "https://www.google.com",
  },
];

export default function CurrentWork() {
  return (
    <section className="currentWork">
      <h2>Current Work</h2>
      {positions.map((position, index) => (
        <div className="positionSummary" key={index}>
          <div>
            <h3>{position.title}</h3>
            <p>{position.company}</p>
            <p>{position.summary}</p>
            <p>
              <a href={position.link}>Website</a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
