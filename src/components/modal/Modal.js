import React, { useEffect } from "react";
import "./modal.scss";
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";
import SC from "../../themes/styledComponents";

export default function Modal({ project, showModal, setShowModal }) {
  useEffect(() => {
    // center images that are too wide
    for (let i = 1; i < project.imgs.length + 1; i++) {
      const img = document.getElementById(`img-${i}`);
      let height = img.naturalHeight;
      let width = img.naturalWidth;
      if (width / height > 1.08) {
        img.parentElement.parentElement.classList.add("center-the-img");
      }
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={"modal " + (!showModal ? "modal-out" : "modal-in")}>
      <div
        className={
          "modal-container " +
          (!showModal ? "modal-container-out" : "modal-container-in")
        }
        key={project.id}
      >
        <div
          className={
            "modal-wrapper " +
            (!showModal ? "modal-wrapper-out" : "modal-wrapper-in")
          }
        >
          <div
            className={
              "favicon-container " +
              (!showModal ? "favicon-container-out" : "favicon-container-in")
            }
          >
            <img src={project.favicon} alt="favicon" className="favicon" />
          </div>
          <div className="modal-item">
            <button className="closeX" onClick={() => handleClose()}>
              <div>
                <span>x</span>
              </div>
            </button>
            <div className="left">
              <div className="left-container">
                {/* desktop icons */}
                <div className="icons-container desktop">
                  {project.icons.map((tech) => (
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
                <SC.UnderLinedH2>{project.title}</SC.UnderLinedH2>
                <p>{project.desc}</p>
                {/* mobile icons */}
                <div className="icons-container mobile">
                  {project.icons.map((tech) => (
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
                    Repo
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
            <SC.ScrollThumb className="right">
              {/* images */}
              {project.imgs.map((img) => {
                const { id, src } = img;

                return (
                  <div className="img-container">
                    <a href={src} target="_blank" rel="noopener noreferrer">
                      <img id={id} src={src} alt="" />
                    </a>
                  </div>
                );
              })}
            </SC.ScrollThumb>
          </div>
        </div>
      </div>
      <SC.ModalBackground
        className={
          "modal-background " +
          (!showModal ? "modal-background-out" : "modal-background-in")
        }
        onClick={() => handleClose()}
      ></SC.ModalBackground>
    </div>
  );
}
