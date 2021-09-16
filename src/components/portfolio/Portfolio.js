import React, { useState, useEffect } from "react";
import List from "./list/List";
import Page from "./page/Page";
import "./portfolio.scss";
import Modal from "../modal/Modal";
// portfolios
import { webDesignPortfolio } from "./portfolioData/webDesignPortfolio";
import { reactPortfolio } from "./portfolioData/reactPortfolio";
import { gamesPortfolio } from "./portfolioData/gamesPortfolio";
// imgs
import arrowDown from "../../assets/arrows/arrowDown.png";
import arrowUp from "../../assets/arrows/arrowUp.png";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [project, setProject] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const target = React.createRef();

  const pages = [
    { id: "react", content: reactPortfolio },
    { id: "games", content: gamesPortfolio },
    { id: "webDesign", content: webDesignPortfolio },
  ];

  const list = [
    { id: "react", title: "React" },
    { id: "games", title: "Games" },
    { id: "webDesign", title: "Web Design" },
  ];

  const handleSetModal = (item) => {
    setProject(item);
    setTimeout(function () {
      setShowModal(true);
    }, 250);
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
      <div className="scroller">
        {pages.map((portfolio) => (
          <div className="pages" id={portfolio.id}>
            <Page
              portfolio={portfolio.content}
              handleSetModal={handleSetModal}
            />
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
