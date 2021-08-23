// import "./App.css";
import "./app.scss";
import { useState } from "react";
// components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import Contact from "./components/contact/Contact";
import Menu from "./components/navbar/menu/Menu";
import About from "./components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Portfolio />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
