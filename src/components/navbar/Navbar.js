import React from "react";
import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo" id="navbarTitle">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="844.000000pt"
              height="844.000000pt"
              viewBox="0 0 844.000000 844.000000"
              preserveAspectRatio="xMidYMid meet"
              className="navbar-svg"
              id="gradient"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,844.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
                className="navbar-svg-g"
              >
                <path
                  d="M0 4220 l0 -4220 4220 0 4220 0 0 4220 0 4220 -4220 0 -4220 0 0
-4220z m4480 4200 c300 -21 577 -67 844 -141 125 -34 392 -121 402 -132 2 -1
-683 -689 -1521 -1527 l-1525 -1525 0 1521 0 1520 131 48 c525 188 1126 273
1669 236z m2113 -730 c408 -280 764 -631 1058 -1041 49 -68 89 -129 89 -134 0
-6 -785 -795 -1745 -1755 l-1745 -1745 -627 628 -628 627 1745 1745 c960 960
1746 1745 1748 1745 2 0 49 -31 105 -70z m-4715 -5216 l-3 -1746 -122 88
c-193 141 -326 256 -508 439 -340 340 -594 696 -805 1125 -218 445 -346 888
-406 1405 -24 208 -24 662 0 870 60 517 188 960 406 1405 211 429 465 785 805
1125 182 183 315 298 508 439 l122 88 3 -1746 c1 -960 1 -2532 0 -3492z m6362
2984 c130 -419 184 -780 184 -1238 0 -450 -49 -789 -175 -1207 -267 -890 -833
-1676 -1599 -2224 l-102 -72 -864 864 -864 864 1657 1657 1658 1658 28 -73
c15 -39 50 -143 77 -229z m-2463 -5144 c-46 -24 -282 -106 -419 -144 -830
-236 -1738 -205 -2547 86 l-131 48 0 1570 0 1571 1560 -1560 c1469 -1469 1558
-1560 1537 -1571z"
                />
              </g>
            </svg>
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>(610)-608-0468</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>Kevin.Figenshu@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
