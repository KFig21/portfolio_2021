import React, { useState, useEffect, createRef } from "react";
import "./projects.scss";
import Dots from "./dots/Dots";
// icons
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";
// imgs
import arrowDown from "../../assets/arrows/arrowDown.png";
import arrowUp from "../../assets/arrows/arrowUp.png";
import centerImg from "../../assets/arrows/center.png";
// project data
import {
  petstagramSpotlightData,
  gameNseekSpotlightData,
  toDoListSpotlightData,
} from "../../allProjects";

const projectData = [
  petstagramSpotlightData,
  gameNseekSpotlightData,
  toDoListSpotlightData,
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const list = [
    { id: petstagramSpotlightData.id },
    { id: gameNseekSpotlightData.id },
    { id: toDoListSpotlightData.id },
  ];

  // scroll functionality
  const target = createRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setScrollProgress(0);
    }

    if (windowScroll > totalWidth) {
      return setScrollProgress(100);
    }

    setScrollProgress((windowScroll / totalWidth) * 100);
  };

  useEffect(() => {
    target.current.addEventListener("scroll", scrollListener);
    return () =>
      target.current &&
      target.current.removeEventListener("scroll", scrollListener);
  });

  useEffect(() => {
    if (scrollProgress < 25) {
      setIndex(0);
    } else if (scrollProgress < 75) {
      setIndex(1);
    } else {
      setIndex(2);
    }
  }, [scrollProgress]);

  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">Project Spotlight</h1>
      <div className="slider" ref={target}>
        {projectData.map((project) => {
          const { id, icons, title, desc, repository, live, imgs, favicon } =
            project;

          return (
            <div className="project-slide" id={id}>
              <div className="container">
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
                              <span
                                className={`stack ${tech.color}-color-text`}
                              >
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
                              <span
                                className={`stack ${tech.color}-color-text`}
                              >
                                {tech.color}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* details container mobile */}
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
                      {/* details container mobile horizontal */}
                      <div className="details-container mobileHorizontal">
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
                  {/* desktop right container */}
                  <div className="right">
                    <div className="shade">
                      <div className="shade-container">
                        <div className="favicon-container">
                          <img
                            src={favicon}
                            alt="favicon"
                            className="favicon"
                          />
                        </div>
                        <div className="shade-links">
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
                    {imgs.map((img) => (
                      <div className="img-container">
                        <a
                          href={img.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={img.src} alt="" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dots-container">
        {list.map((item) => (
          <Dots
            id={item.id}
            key={item.id}
            active={index === item.id}
            setIndex={setIndex}
          />
        ))}
      </div>
      <a className="up-arrow" href="#about">
        <img className="arrow-img" src={arrowUp} alt="next section" />
      </a>
      <a className="center-screen" href="#projects">
        <img className="center-img" src={centerImg} alt="center" />
      </a>
      <a className="down-arrow" href="#portfolio">
        <img className="arrow-img" src={arrowDown} alt="next section" />
      </a>
    </div>
  );
}
