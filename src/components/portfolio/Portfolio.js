import React, { useState, useEffect } from "react";
import List from "./list/List";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "./portfolioData.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <List
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt={`${item.title} img`} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <a className="up-arrow" href="#home">
        <img className="arrow-img" src="assets/up.png" alt="next section" />
      </a>
      <a className="down-arrow" href="#projects">
        <img className="arrow-img" src="assets/down.png" alt="next section" />
      </a>
    </div>
  );
}
