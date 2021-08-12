import React from "react";
import "./projects.scss";
import { useState } from "react";
import { projectData } from "./projectData";
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < projectData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">Project Spotlight</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projectData.map((project) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="mobile-details">
                    <a
                      href={project.repository}
                      className="option"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="option"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LanguageIcon />
                      Live
                    </a>
                    <a
                      href={project.live}
                      className="option"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DescriptionIcon />
                      Details
                    </a>
                  </div>
                  <div className="icons-container">
                    {project.icon.map((tech) => (
                      <div>
                        <div className={`img-container ${tech.color}-color-bg`}>
                          <img src={tech.icon} alt="" />
                          <span className={`stack ${tech.color}-color-text`}>
                            {tech.color}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                </div>
              </div>
              <div className="right">
                <div className="shade">
                  <div className="shade-container">
                    <a
                      href={project.repository}
                      className="option"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="option"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LanguageIcon />
                      Live
                    </a>
                  </div>
                </div>
                <img src={project.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrowLeft.png"
        className="arrow left"
        alt="left arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="right arrow"
        onClick={() => handleClick()}
      />
      <a className="up-arrow" href="#portfolio">
        <img className="arrow-img" src="assets/up.png" alt="next section" />
      </a>
      <a className="down-arrow" href="#testimonials">
        <img className="arrow-img" src="assets/down.png" alt="next section" />
      </a>
    </div>
  );
}
