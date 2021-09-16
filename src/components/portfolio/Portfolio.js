import React, { useState, createRef, useEffect } from "react";
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

  // scroll functionality
  const target = createRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setScrollProgress(0);
    }

    if (windowScroll > totalWidth) {
      return setScrollProgress(100);
    }

    setScrollProgress((windowScroll / totalWidth) * 100);
  };

  useEffect(() => {
    target.current.addEventListener("scroll", scrollListener);
    return () =>
      target.current &&
      target.current.removeEventListener("scroll", scrollListener);
  });

  useEffect(() => {
    if (scrollProgress < 25) {
      setSelected("react");
    } else if (scrollProgress < 75) {
      setSelected("games");
    } else {
      setSelected("webDesign");
    }
  }, [scrollProgress]);

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
      <div className="scroller" ref={target}>
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
