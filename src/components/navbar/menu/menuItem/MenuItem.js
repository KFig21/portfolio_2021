import React, { useState, useEffect } from "react";
import "./menuItem.scss";

export default function MenuItem({ item, setMenuOpen, list, index }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (item.toString().toLowerCase() === list[index]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [index]);
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a className="menuItem underline" href={`#${item.toLowerCase()}`}>
        <span className={active ? "text active" : "text inactive"}>
          {item === "Intro" ? "Home" : item}
        </span>
      </a>
    </li>
  );
}
