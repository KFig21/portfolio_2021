import React from "react";
import "./dots.scss";

export default function Dots({ id, active, setIndex }) {
  return (
    <a className="dots-a" href={`#${id}`}>
      <li
        className={active ? "dot active" : "dot"}
        onClick={() => setIndex(id)}
      ></li>
    </a>
  );
}
