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
      {/* original home page */}

      {/* <div className="left">
        <div className="img-container"> */}
      {/* <img src="assets/man.png" alt="" /> */}
      {/* </div>
      </div> */}
      {/* <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kevin Figenshu</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
      </div> */}

      {/* new home page */}

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
                style={{ width: "88%" }}
                className={fileSelected === 1 ? "file open" : "file"}
                onClick={() => setFileSelected(1)}
              ></span>
              <span
                style={{ width: "80%" }}
                className={fileSelected === 2 ? "file aqua open" : "file aqua"}
                onClick={() => setFileSelected(2)}
              ></span>
              <span
                style={{ width: "72%" }}
                className={fileSelected === 3 ? "file open" : "file"}
                onClick={() => setFileSelected(3)}
              ></span>
              <span
                style={{ width: "75%" }}
                className={fileSelected === 4 ? "file open" : "file"}
                onClick={() => setFileSelected(4)}
              ></span>
              <span
                style={{ width: "84%" }}
                className={
                  fileSelected === 5 ? "file yellow open" : "file yellow"
                }
                onClick={() => setFileSelected(5)}
              ></span>
              <span
                style={{ width: "68%" }}
                className={fileSelected === 6 ? "file open" : "file"}
                onClick={() => setFileSelected(6)}
              ></span>
              <span
                style={{ width: "80%" }}
                className={fileSelected === 7 ? "file red open" : "file red"}
                onClick={() => setFileSelected(7)}
              ></span>
              <span
                style={{ width: "74%" }}
                className={fileSelected === 8 ? "file open" : "file"}
                onClick={() => setFileSelected(8)}
              ></span>
              <span
                style={{ width: "60%" }}
                className={fileSelected === 9 ? "file open" : "file"}
                onClick={() => setFileSelected(9)}
              ></span>
            </div>
            <div className="openDoc">
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

      <a className="down-arrow home-arrow" href="#projects">
        <img
          className="arrow-img home-arrow-img"
          src={arrowDown}
          alt="next section"
        />
      </a>
    </div>
  );
}
