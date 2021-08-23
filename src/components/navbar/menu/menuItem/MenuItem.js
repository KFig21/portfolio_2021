import React from "react";
import "./menuItem.scss";

export default function MenuItem({ item, setMenuOpen }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a className="menuItem underline" href={`#${item.toLowerCase()}`}>
        <span className="text">{item === "Intro" ? "Home" : item}</span>
      </a>
    </li>
  );
}
