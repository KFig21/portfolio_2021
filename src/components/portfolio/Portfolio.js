import React, { useState, createRef, useEffect } from "react";
import List from "./list/List";
import Page from "./page/Page";
import "./portfolio.scss";
import Modal from "../modal/Modal";
// portfolios
import { webDesignPortfolio } from "./portfolioData/webDesignPortfolio";
import { reactPortfolio } from "./portfolioData/reactPortfolio";
import { gamesPortfolio } from "./portfolioData/gamesPortfolio";
import { nodePortfolio } from "./portfolioData/nodePortfolio";

export default function Portfolio() {
  // used for selected portfolio
  const [selected, setSelected] = useState(0);
  // used for portfolio currently shown on screen. when scrolling this will change the collor of the nav buttons
  const [current, setCurrent] = useState(0);
  const [project, setProject] = useState(reactPortfolio[0]);
  const [showModal, setShowModal] = useState(false);

  const pages = [
    { id: 0, name: "react", content: reactPortfolio },
    { id: 1, name: "node", content: nodePortfolio },
    { id: 2, name: "games", content: gamesPortfolio },
    { id: 3, name: "webDesign", content: webDesignPortfolio },
  ];

  const list = [
    { id: 0, title: "React" },
    { id: 1, title: "Node" },
    { id: 2, title: "Games" },
    { id: 3, title: "Web Design" },
  ];

  const handleSetModal = (item) => {
    setProject(item);
    // idk why, but for the page to center it needs to be within this timer function
    setTimeout(function () {
      document.getElementById("portfolio").scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      setTimeout(function () {
        document.getElementById("portfolio").scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        setShowModal(true);
      }, 250);
    }, 0);
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
    if (scrollProgress < 30) {
      setSelected(0);
      setCurrent(0);
    } else if (scrollProgress < 60) {
      setSelected(1);
      setCurrent(1);
    } else if (scrollProgress < 80) {
      setSelected(2);
      setCurrent(2);
    } else {
      setSelected(3);
      setCurrent(3);
    }
  }, [scrollProgress]);

  const handleListClick = (id) => {
    const element = target.current;
    const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
    setSelected(id);
    setScrollProgress((id / 3) * 100);
    element.scrollTo((id / 3) * totalWidth, 0);
    document.getElementById("portfolio").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio section" id="portfolio">
      <div className="title-container">
        <h1>
          <span>&lt; </span>
          <a href="#portfolio">Portfolio</a>
          <span> /&gt;</span>
        </h1>
      </div>

      <ul>
        {list.map((item) => (
          <List
            title={item.title}
            id={item.id}
            key={item.id}
            active={current === item.id}
            handleListClick={handleListClick}
            selected={selected}
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

      <Modal
        project={project}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
