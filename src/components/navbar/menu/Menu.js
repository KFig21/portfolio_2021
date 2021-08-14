import React from "react";
import "./menu.scss";
import MenuItem from "./menuItem/MenuItem";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")} id="menu">
      <ul>
        <MenuItem item={"Home"} setMenuOpen={setMenuOpen} />
        <MenuItem item={"Portfolio"} setMenuOpen={setMenuOpen} />
        <MenuItem item={"Projects"} setMenuOpen={setMenuOpen} />
        <MenuItem item={"Technologies"} setMenuOpen={setMenuOpen} />
        <MenuItem item={"Contact"} setMenuOpen={setMenuOpen} />
      </ul>
    </div>
  );
}
