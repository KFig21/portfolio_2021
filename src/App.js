import "./app.scss";
import "./App.css";
import React, { useState, useEffect, createRef } from "react";
import { ThemeProvider } from "styled-components";
import {
  aquaTheme,
  yellowTheme,
  redTheme,
  greenTheme,
  purpleTheme,
} from "./themes/themes";
// components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Menu from "./components/navbar/menu/Menu";
import About from "./components/about/About";

function App() {
  const appHeight = () => {
    document.documentElement.style.setProperty(
      "--app-height",
      `calc(${window.innerHeight}px)`
    );
    document.documentElement.style.setProperty(
      "--section-height",
      `calc(${window.innerHeight}px - 70px)`
    );
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  const [menuOpen, setMenuOpen] = useState(false);

  // nav scroll
  const [index, setIndex] = useState(0);
  const list = {
    1: "home",
    2: "about",
    3: "projects",
    4: "portfolio",
    5: "skills",
    6: "contact",
  };
  const [upButton, setUpButton] = useState(0);
  const [downButton, setDownButton] = useState(2);

  // scroll functionality
  const target = createRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    console.log("log");
    const element = target.current;
    const windowScroll = element.scrollTop; // Distance of the scrollbar from the leftmost point
    const totalHeight = element.scrollHeight - element.clientHeight; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setScrollProgress(0);
    }

    if (windowScroll > totalHeight) {
      return setScrollProgress(100);
    }
    setScrollProgress((windowScroll / totalHeight) * 100);
  };

  useEffect(() => {
    target.current.addEventListener("scroll", scrollListener);
    return () =>
      target.current &&
      target.current.removeEventListener("scroll", scrollListener);
  });

  useEffect(() => {
    if (scrollProgress < 15) {
      setIndex(1);
      setUpButton(1);
      setDownButton(2);
    } else if (scrollProgress < 35) {
      setIndex(2);
      setUpButton(1);
      setDownButton(3);
    } else if (scrollProgress < 53) {
      setIndex(3);
      setUpButton(2);
      setDownButton(4);
    } else if (scrollProgress < 73) {
      setIndex(4);
      setUpButton(3);
      setDownButton(5);
    } else if (scrollProgress < 91) {
      setIndex(5);
      setUpButton(4);
      setDownButton(6);
    } else {
      setIndex(6);
      setUpButton(5);
      setDownButton(6);
    }
  }, [scrollProgress]);

  // theme
  const [theme, setTheme] = useState(aquaTheme);
  const [fileSelected, setFileSelected] = useState(2);
  const changeTheme = (newTheme) => {
    if (newTheme) {
      setTheme(newTheme);
    } else {
      if (theme.name === "green") {
        setTheme(aquaTheme);
        setFileSelected(2);
      } else if (theme.name === "aqua") {
        setTheme(yellowTheme);
        setFileSelected(4);
      } else if (theme.name === "yellow") {
        setTheme(redTheme);
        setFileSelected(6);
      } else if (theme.name === "red") {
        setTheme(purpleTheme);
        setFileSelected(8);
      } else if (theme.name === "purple") {
        setTheme(greenTheme);
        setFileSelected(1);
      } else {
        setTheme(aquaTheme);
        setFileSelected(2);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          list={list}
          index={index}
          changeTheme={changeTheme}
        />
        <div className="sections-container">
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            upButton={upButton}
            downButton={downButton}
            list={list}
            index={index}
          />
          <div
            className="sections"
            onClick={() => setMenuOpen(false)}
            ref={target}
          >
            <Home
              changeTheme={changeTheme}
              fileSelected={fileSelected}
              setFileSelected={setFileSelected}
            />
            <About />
            <Projects />
            <Portfolio />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
