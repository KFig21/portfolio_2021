import React, { useState, useEffect } from "react";
import List from "./list/List";
import "./portfolio.scss";
import Modal from "../modal/Modal";
import {
  webDesign,
  reactPortfolio,
  gamesPortfolio,
  apiPortfolio,
  otherPortfolio,
} from "./portfolioData.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("webDesign");
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const list = [
    { id: "webDesign", title: "Web Design" },
    { id: "react", title: "React Apps" },
    { id: "games", title: "Games" },
    { id: "apis", title: "APIs" },
    { id: "other", title: "Other" },
  ];

  useEffect(() => {
    switch (selected) {
      case "webDesign":
        setData(webDesign);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "games":
        setData(gamesPortfolio);
        break;
      case "apis":
        setData(apiPortfolio);
        break;
      case "other":
        setData(otherPortfolio);
        break;
      default:
        setData(webDesign);
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
            <img src={item.imgs[0]} alt={`${item.title} img`} />
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
      {showModal && <Modal project={project} setShowModal={setShowModal} />}
    </div>
  );
}
