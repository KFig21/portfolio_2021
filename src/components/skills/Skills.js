import React from "react";
import "./skills.scss";
import SC from "../../themes/styledComponents";
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
    <div className="skills section" id="skills">
      <div className="title-container">
        <h1 className="projects-title">
          <SC.Brackets>&lt; </SC.Brackets>
          <a href="#skills">Tech Skills</a>
          <SC.Brackets> /&gt;</SC.Brackets>
        </h1>
      </div>
      <div className="tech-container">
        <div className="detail">
          Through my programming journey I have learned many languages and
          technologies that I am comfortable with. Programming aside, I have
          valuable skills with other software.
        </div>

        <div className="container">
          <div className="content">
            <div class="scroll-fade-top"></div>
            <div className="tech">
              <SC.SkillsH2>Languages</SC.SkillsH2>
              <div className="tech-container">{mapSkills(languages)}</div>
            </div>
            <div className="tech">
              <SC.SkillsH2>Technologies</SC.SkillsH2>
              <div className="tech-container">{mapSkills(techData)}</div>
            </div>
            <div className="tech">
              <SC.SkillsH2>Other Software</SC.SkillsH2>
              <div className="tech-container">{mapSkills(otherSkills)}</div>
            </div>
            <div class="scroll-fade-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
