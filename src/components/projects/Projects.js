import React from "react";
import "./projects.scss";
import { useState, useEffect } from "react";
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";
// imgs
import arrowDown from "../../assets/arrows/arrowDown.png";
import arrowUp from "../../assets/arrows/arrowUp.png";
import arrowRight from "../../assets/arrows/arrowRight.png";
import arrowLeft from "../../assets/arrows/arrowLeft.png";
// project data
import {
  instagramProjectData,
  gameNseekProjectData,
  hoopShopProjectData,
} from "../../allProjects";

const projectData = [
  instagramProjectData,
  gameNseekProjectData,
  hoopShopProjectData,
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = projectData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">Project Spotlight</h1>
      <div className="slider">
        {projectData.map((project, projectIndex) => {
          const { id, icons, title, desc, repository, live, imgs } = project;

          let position = "nextSlide";
          if (projectIndex === index) {
            position = "activeSlide";
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projectData.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <div className={`container ${position}`}>
              <div className="item" key={id}>
                <div className="left">
                  <div className="left-container">
                    {/* desktop icons */}
                    <div className="icons-container desktop">
                      {icons.map((tech) => (
                        <div key={tech.id}>
                          <div
                            className={`img-container ${tech.color}-color-bg`}
                          >
                            <img src={tech.icon} alt="" />
                            <span className={`stack ${tech.color}-color-text`}>
                              {tech.color}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    {/* mobile icons */}
                    <div className="icons-container mobile">
                      {icons.map((tech) => (
                        <div key={tech.id}>
                          <div
                            className={`img-container ${tech.color}-color-bg`}
                          >
                            <img src={tech.icon} alt="" />
                            <span className={`stack ${tech.color}-color-text`}>
                              {tech.color}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="details-container mobile">
                      <a
                        href={repository}
                        className="option"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CodeIcon style={{ margin: " 0px 5px" }} />
                        Repo
                      </a>
                      <a
                        href={live}
                        className="option"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LanguageIcon style={{ margin: " 0px 5px" }} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="shade">
                    <div className="shade-container">
                      <a
                        href={repository}
                        className="option"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CodeIcon style={{ margin: " 0px 5px" }} />
                        Repo
                      </a>
                      <a
                        href={live}
                        className="option"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LanguageIcon style={{ margin: " 0px 5px" }} />
                        Live
                      </a>
                    </div>
                  </div>
                  <div className="img-container">
                    <a
                      href={imgs[0].src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgs[0].src} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src={arrowLeft}
        className="arrow left"
        alt="left arrow"
        onClick={() => setIndex(index - 1)}
      />
      <img
        src={arrowRight}
        className="arrow right"
        alt="right arrow"
        onClick={() => setIndex(index + 1)}
      />
      <a className="up-arrow" href="#about">
        <img className="arrow-img" src={arrowUp} alt="next section" />
      </a>
      <a className="down-arrow" href="#portfolio">
        <img className="arrow-img" src={arrowDown} alt="next section" />
      </a>
    </div>
  );
}
