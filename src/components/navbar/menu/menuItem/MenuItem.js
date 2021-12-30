import React, { useState, useEffect } from "react";
import "./menuItem.scss";
import {
  Home,
  HomeOutlined,
  Person,
  PersonOutline,
  ExtensionSharp,
  ExtensionOutlined,
  Folder,
  FolderOutlined,
  AccountTree,
  AccountTreeOutlined,
  Phone,
  PhoneOutlined,
} from "@material-ui/icons";

export default function MenuItem({ item, setMenuOpen, list, index }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (item.toString().toLowerCase() === list[index]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [index]);
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a className="menuItem underline" href={`#${item.toLowerCase()}`}>
        <span className={active ? "menu-item active" : "menu-item inactive"}>
          {item === "Home" ? (
            active ? (
              <Home className="menu-icon" />
            ) : (
              <HomeOutlined className="menu-icon" />
            )
          ) : null}
          {item === "About" ? (
            active ? (
              <Person className="menu-icon" />
            ) : (
              <PersonOutline className="menu-icon" />
            )
          ) : null}
          {item === "Projects" ? (
            active ? (
              <ExtensionSharp className="menu-icon" />
            ) : (
              <ExtensionOutlined className="menu-icon" />
            )
          ) : null}
          {item === "Portfolio" ? (
            active ? (
              <Folder className="menu-icon" />
            ) : (
              <FolderOutlined className="menu-icon" />
            )
          ) : null}
          {item === "Skills" ? (
            active ? (
              <AccountTree className="menu-icon" />
            ) : (
              <AccountTreeOutlined className="menu-icon" />
            )
          ) : null}
          {item === "Contact" ? (
            active ? (
              <Phone className="menu-icon" />
            ) : (
              <PhoneOutlined className="menu-icon" />
            )
          ) : null}

          <span className="text">{item === "Intro" ? "Home" : item}</span>
        </span>
      </a>
    </li>
  );
}
