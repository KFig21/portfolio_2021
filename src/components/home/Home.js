import React from "react";
import { useState, useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss";
// imgs
import arrowDown from "../../assets/arrows/arrowDown.png";

export default function Home() {
  const textRef = useRef();
  const [sidebarSelected, setSidebarSelected] = useState(1);
  const [fileSelected, setFileSelected] = useState(1);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Student"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="editor-container">
        <div className="editor">
          <div className="top-bar">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
          </div>
          <div className="center">
            <div className="sidebar">
              <span
                className={sidebarSelected === 1 ? "circle filled" : "circle"}
                onClick={() => setSidebarSelected(1)}
              ></span>
              <span
                className={sidebarSelected === 2 ? "circle filled" : "circle"}
                onClick={() => setSidebarSelected(2)}
              ></span>
              <span
                className={sidebarSelected === 3 ? "circle filled" : "circle"}
                onClick={() => setSidebarSelected(3)}
              ></span>
              <span
                className={sidebarSelected === 4 ? "circle filled" : "circle"}
                onClick={() => setSidebarSelected(4)}
              ></span>
              <span
                className={sidebarSelected === 5 ? "circle filled" : "circle"}
                onClick={() => setSidebarSelected(5)}
              ></span>
            </div>
            <div className="filebar">
              <span
                style={{ width: "98%" }}
                className={fileSelected === 1 ? "file open" : "file"}
                onClick={() => setFileSelected(1)}
              ></span>
              <span
                style={{ width: "90%" }}
                className={fileSelected === 2 ? "file aqua open" : "file aqua"}
                onClick={() => setFileSelected(2)}
              ></span>
              <span
                style={{ width: "82%" }}
                className={fileSelected === 3 ? "file open" : "file"}
                onClick={() => setFileSelected(3)}
              ></span>
              <span
                style={{ width: "85%" }}
                className={fileSelected === 4 ? "file open" : "file"}
                onClick={() => setFileSelected(4)}
              ></span>
              <span
                style={{ width: "94%" }}
                className={
                  fileSelected === 5 ? "file yellow open" : "file yellow"
                }
                onClick={() => setFileSelected(5)}
              ></span>
              <span
                style={{ width: "78%" }}
                className={fileSelected === 6 ? "file open" : "file"}
                onClick={() => setFileSelected(6)}
              ></span>
              <span
                style={{ width: "90%" }}
                className={fileSelected === 7 ? "file red open" : "file red"}
                onClick={() => setFileSelected(7)}
              ></span>
              <span
                style={{ width: "84%" }}
                className={fileSelected === 8 ? "file open" : "file"}
                onClick={() => setFileSelected(8)}
              ></span>
              <span
                style={{ width: "70%" }}
                className={fileSelected === 9 ? "file open" : "file"}
                onClick={() => setFileSelected(9)}
              ></span>
            </div>
            <div className="openDoc">
              <div className="lines">
                <span className="number line1">1</span>
                <span className="number line2">2</span>
                <span className="number line3">
                  <span className="number3">3</span>
                </span>
                <span className="number line4">
                  <span className="number4">4</span>
                </span>
              </div>
              <div className="wrapper">
                <h2>Hi there, I'm</h2>
                <h1>&lt;Kevin Figenshu /&gt;</h1>
                <h3>
                  A <span ref={textRef}></span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="down-arrow home-arrow" href="#about">
        <img
          className="arrow-img home-arrow-img"
          src={arrowDown}
          alt="next section"
        />
      </a>
    </div>
  );
}
