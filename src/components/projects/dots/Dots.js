import React from "react";
import "./dots.scss";
import SC from "../../../themes/styledComponents";

export default function Dots({ id, active, handleDotClick }) {
  return (
    <div className="dots-a">
      <SC.Dots
        className={active ? "dot active" : "dot"}
        onClick={() => handleDotClick(id)}
      ></SC.Dots>
    </div>
  );
}
