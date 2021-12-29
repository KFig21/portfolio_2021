import React from "react";
import "./list.scss";

export default function List({ title, id, active, handleListClick }) {
  return (
    <a className="portfolio-list-a" href="#portfolio">
      <li
        className={active ? "list active" : "list"}
        onClick={() => handleListClick(id)}
      >
        {title}
      </li>
    </a>
  );
}
