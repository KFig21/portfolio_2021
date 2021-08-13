import React from "react";
import "./modal.scss";
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";

export default function Modal({ project, setShowModal }) {
  console.log(project);

  return (
    <div className="modal">
      <div className="modal-container" key={project.id}>
        <div className="modal-item">
          <button className="closeX" onClick={() => setShowModal(false)}>
            <div>
              <span>x</span>
            </div>
          </button>
          <div className="left">
            <div className="left-container">
              {/* desktop icons */}
              <div className="icons-container desktop">
                {project.icon.map((tech) => (
                  <div key={tech.id}>
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
              {/* mobile icons */}
              <div className="icons-container mobile">
                {project.icon.map((tech) => (
                  <div key={tech.id}>
                    <div className={`img-container ${tech.color}-color-bg`}>
                      <img src={tech.icon} alt="" />
                      <span className={`stack ${tech.color}-color-text`}>
                        {tech.color}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="details-container ">
                <a
                  href={project.repository}
                  className="option"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeIcon style={{ margin: " 0px 5px" }} />
                  Code
                </a>
                <a
                  href={project.live}
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
            {project.imgs.map((img) => (
              <div className="img-container">
                <a href={img} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
