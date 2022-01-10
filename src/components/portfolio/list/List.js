import React from "react";
import "./list.scss";
import SC from "../../../themes/styledComponents";

export default function List({ title, id, active, handleListClick }) {
  return (
    <a className="portfolio-list-a" href="#portfolio">
      <SC.PortfolioListItem
        className={active ? "list active" : "list inactive"}
        onClick={() => handleListClick(id)}
      >
        {title}
      </SC.PortfolioListItem>
    </a>
  );
}
