import "./app.scss";
import "./App.css";
import { useState } from "react";
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

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections" onClick={() => setMenuOpen(false)}>
        <Home />
        <About />
        <Projects />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
