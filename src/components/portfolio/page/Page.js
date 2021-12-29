import React from "react";
import "./page.scss";

export default function Page({ portfolio, handleSetModal }) {
  return (
    <div className="page-container">
      {portfolio.map((item) => (
        <a href="#portfolio" onClick={() => handleSetModal(item)}>
          <div key={item.id} className="item">
            <img src={item.favicon} alt={`${item.title} img`} />
            <h3>{item.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}
