import React from "react";
import "./menuItem.scss";

export default function MenuItem({ item, setMenuOpen }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a className="menuItem underline" href={`#${item.toLowerCase()}`}>
        {item === "Intro" ? "Home" : item}
      </a>
    </li>
  );
}
