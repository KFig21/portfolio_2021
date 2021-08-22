import React from "react";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss";
// imgs
import arrowDown from "../../assets/arrows/arrowDown.png";

export default function Home() {
  const textRef = useRef();

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
              <span className="circle filled"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <div className="filebar">
              <span style={{ width: "88%" }} className="file"></span>
              <span style={{ width: "80%" }} className="file aqua"></span>
              <span style={{ width: "72%" }} className="file"></span>
              <span style={{ width: "75%" }} className="file"></span>
              <span style={{ width: "84%" }} className="file yellow"></span>
              <span style={{ width: "68%" }} className="file"></span>
              <span style={{ width: "80%" }} className="file red"></span>
              <span style={{ width: "74%" }} className="file"></span>
              <span style={{ width: "60%" }} className="file"></span>
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

      <a className="down-arrow" href="#portfolio">
        <img className="arrow-img" src={arrowDown} alt="next section" />
      </a>
    </div>
  );
}
