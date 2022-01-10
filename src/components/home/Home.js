import React from "react";
import { useState, useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss";
// imgs
import {
  aquaTheme,
  redTheme,
  yellowTheme,
  greenTheme,
  purpleTheme,
} from "../../themes/themes";
import SC from "../../themes/styledComponents";

export default function Home({ changeTheme, fileSelected, setFileSelected }) {
  const textRef = useRef();
  const [sidebarSelected, setSidebarSelected] = useState(1);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Student"],
    });
  }, []);

  const handleFileClick = (file, theme) => {
    changeTheme(theme);
    setFileSelected(file);
  };

  return (
    <SC.GradientBackground className="home section" id="home">
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
                className={
                  fileSelected === 1 ? "file green open" : "file green"
                }
                onClick={() => handleFileClick(1, greenTheme)}
              ></span>
              <span
                style={{ width: "90%" }}
                className={fileSelected === 2 ? "file aqua open" : "file aqua"}
                onClick={() => handleFileClick(2, aquaTheme)}
              ></span>
              <span
                style={{ width: "85%" }}
                className={fileSelected === 3 ? "file open" : "file"}
                onClick={() => setFileSelected(3)}
              ></span>
              <span
                style={{ width: "94%" }}
                className={
                  fileSelected === 4 ? "file yellow open" : "file yellow"
                }
                onClick={() => handleFileClick(4, yellowTheme)}
              ></span>
              <span
                style={{ width: "78%" }}
                className={fileSelected === 5 ? "file open" : "file"}
                onClick={() => setFileSelected(5)}
              ></span>
              <span
                style={{ width: "90%" }}
                className={fileSelected === 6 ? "file red open" : "file red"}
                onClick={() => handleFileClick(6, redTheme)}
              ></span>
              <span
                style={{ width: "84%" }}
                className={fileSelected === 7 ? "file open" : "file"}
                onClick={() => setFileSelected(7)}
              ></span>
              <span
                style={{ width: "70%" }}
                className={
                  fileSelected === 8 ? "file purple open" : "file purple"
                }
                onClick={() => handleFileClick(8, purpleTheme)}
              ></span>
              <span
                style={{ width: "82%" }}
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
    </SC.GradientBackground>
  );
}
