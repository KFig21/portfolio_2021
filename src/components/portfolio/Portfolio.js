import React, { useState, useEffect } from "react";
import List from "./list/List";
import "./portfolio.scss";
import Modal from "../modal/Modal";
// portfolios
import { webDesignPortfolio } from "./portfolioData/webDesignPortfolio";
import { reactPortfolio } from "./portfolioData/reactPortfolio";
import { gamesPortfolio } from "./portfolioData/gamesPortfolio";
import { morePortfolio } from "./portfolioData/morePortfolio";
// imgs
import arrowDown from "../../assets/arrows/arrowDown.png";
import arrowUp from "../../assets/arrows/arrowUp.png";

export default function Portfolio() {
  const [selected, setSelected] = useState("webDesign");
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const list = [
    { id: "webDesign", title: "Web Design" },
    { id: "react", title: "React" },
    { id: "games", title: "Games" },
    { id: "more", title: "More" },
  ];

  useEffect(() => {
    switch (selected) {
      case "webDesign":
        setData(webDesignPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "games":
        setData(gamesPortfolio);
        break;
      case "more":
        setData(morePortfolio);
        break;
      default:
        setData(webDesignPortfolio);
    }
  }, [selected]);

  const handleSetModal = (item) => {
    setShowModal(true);
    setProject(item);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <List
            title={item.title}
            id={item.id}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => handleSetModal(item)}
          >
            <img src={item.imgs[0].src} alt={`${item.title} img`} />
            <h3>{item.title}</h3>
            <div className="shade"></div>
          </div>
        ))}
      </div>
      <a className="up-arrow" href="#projects">
        <img className="arrow-img" src={arrowUp} alt="next section" />
      </a>
      <a className="down-arrow" href="#skills">
        <img className="arrow-img" src={arrowDown} alt="next section" />
      </a>
      {showModal && <Modal project={project} setShowModal={setShowModal} />}
    </div>
  );
}
