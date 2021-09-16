import React from "react";
import "./list.scss";

export default function List({ title, id, active, setSelected }) {
  return (
    <a className="portfolio-list-a" href={`#${id}`}>
      <li
        className={active ? "list active" : "list"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </a>
  );
}
