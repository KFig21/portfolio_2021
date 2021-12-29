import React from "react";
import "./dots.scss";

export default function Dots({ id, active, handleDotClick }) {
  return (
    <div className="dots-a">
      <li
        className={active ? "dot active" : "dot"}
        onClick={() => handleDotClick(id)}
      ></li>
    </div>
  );
}
