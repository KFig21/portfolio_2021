import React from "react";
import "./skills.scss";
// skills data
import { languages, techData, otherSkills } from "../../allProjects";

export default function Skills() {
  const mapSkills = (skills) => {
    return skills.map((skill) => (
      <div
        className={`skill-container ${skill.name.toLowerCase()}-color-bg-hover`}
      >
        <div className={`img-container ${skill.name.toLowerCase()}-color-bg`}>
          <img src={skill.icon} alt="" />
        </div>
        <div className="skill">
          <p>{skill.name}</p>
          <p>
            {skill.exp} {skill.exp > 1 ? "years" : "year"} exp
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="skills" id="skills">
      <div className="title-container">
        <h1 className="projects-title">
          <span>&lt; </span>
          <a href="#skills">Tech Skills</a>
          <span> /&gt;</span>
        </h1>
      </div>
      <p className="detail">
        Through my programming journey I have learned many languages and
        technologies that I am comfortable with. Programming aside, I have
        valuable skills with other software.
      </p>

      <div className="container">
        <div className="content">
          <div class="scroll-fade-top"></div>
          <div className="tech">
            <h2>Languages</h2>
            <div className="tech-container">{mapSkills(languages)}</div>
          </div>
          <div className="tech">
            <h2>Technologies</h2>
            <div className="tech-container">{mapSkills(techData)}</div>
          </div>
          <div className="tech">
            <h2>Other Software</h2>
            <div className="tech-container">{mapSkills(otherSkills)}</div>
          </div>
          <div class="scroll-fade-bottom"></div>
        </div>
      </div>
    </div>
  );
}
