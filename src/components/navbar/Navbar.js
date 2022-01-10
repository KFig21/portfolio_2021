import React from "react";
import "./navbar.scss";
import Logo from "./menu/Logo";
import ArrowUp from "./ArrowUp";
// imgs
import arrowDown from "../../assets/arrows/arrowDown-accent.png";
import arrowUp from "../../assets/arrows/arrowUp-accent.png";
import centerIcon from "../../assets/arrows/center-accent3.png";
import SC from "../../themes/styledComponents";

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
            <SC.Hamburger className="line1"></SC.Hamburger>
            <SC.Hamburger className="line2"></SC.Hamburger>
            <SC.Hamburger className="line3"></SC.Hamburger>
          </div>
        </div>
        <div className="center">
          <a className="up-arrow  nav-button" href={`#${list[upButton]}`}>
            {/* <img className="arrow-img" src={arrowUp} alt="next section" /> */}
            <ArrowUp src={arrowUp} alt="next section" />
          </a>
          {/* <a className="center-button nav-button" href={`#${list[index]}`}>
            <img className="arrow-img" src={centerIcon} alt="next section" />
          </a> */}
          <a className="down-arrow nav-button" href={`#${list[downButton]}`}>
            {/* <img className="arrow-img" src={arrowDown} alt="next section" /> */}
            <ArrowUp src={arrowUp} alt="next section" />
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
