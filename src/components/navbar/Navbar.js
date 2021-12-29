import React from "react";
import "./navbar.scss";
import Logo from "./menu/Logo";
// imgs
import arrowDown from "../../assets/arrows/arrowDown-accent.png";
import arrowUp from "../../assets/arrows/arrowUp-accent.png";
import centerIcon from "../../assets/arrows/center-accent3.png";

export default function Navbar({
  menuOpen,
  setMenuOpen,
  upButton,
  downButton,
  list,
  index,
}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        <div className="center">
          <a className="up-arrow  nav-button" href={`#${list[upButton]}`}>
            <img className="arrow-img" src={arrowUp} alt="next section" />
          </a>
          {/* <a className="center-button nav-button" href={`#${list[index]}`}>
            <img className="arrow-img" src={centerIcon} alt="next section" />
          </a> */}
          <a className="down-arrow nav-button" href={`#${list[downButton]}`}>
            <img className="arrow-img" src={arrowDown} alt="next section" />
          </a>
        </div>
        <div className="right">
          <a href="#home" className="logo" id="navbarTitle">
            <Logo />
          </a>
        </div>
      </div>
    </div>
  );
}
