import React from "react";
import "./list.scss";

export default function List({ title, id, active, setSelected }) {
  return (
    <li
      className={active ? "list active" : "list"}
      id={id}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
