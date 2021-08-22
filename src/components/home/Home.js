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
      <div className="left">
        <div className="img-container">
          {/* <img src="assets/man.png" alt="" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kevin Figenshu</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <a className="down-arrow" href="#portfolio">
        <img className="arrow-img" src={arrowDown} alt="next section" />
      </a>
    </div>
  );
}
