import React from "react";
import SC from "../../themes/styledComponents";
import "./navbar.scss";

export default function Logo() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="602.000000pt"
      height="602.000000pt"
      viewBox="0 0 602.000000 602.000000"
      preserveAspectRatio="xMidYMid meet"
      className="arrow-svg"
    >
      <SC.ArrowSvg
        transform="translate(0.000000,602.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
        className="arrow-g"
      >
        <path
          d="M1550 3235 l-1455 -1455 228 -227 227 -228 1203 1203 1202 1202 55 0
55 0 1202 -1202 1203 -1203 227 228 228 227 -1455 1455 c-800 800 -1457 1455
-1460 1455 -3 0 -660 -655 -1460 -1455z"
        />
      </SC.ArrowSvg>
    </svg>
  );
}
