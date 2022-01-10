import React from "react";
import "./menu.scss";
import MenuItem from "./menuItem/MenuItem";
import Logo from "./Logo";

export default function Menu({
  menuOpen,
  setMenuOpen,
  list,
  index,
  changeTheme,
}) {
  return (
    <div className={"menu " + (menuOpen && "active")} id="menu">
      <div className="menu-logo" onClick={() => changeTheme()}>
        <Logo changeTheme={changeTheme} />
      </div>
      <div className="ul-container">
        <ul>
          <MenuItem
            list={list}
            index={index}
            item={"Home"}
            setMenuOpen={setMenuOpen}
          />
          <MenuItem
            list={list}
            index={index}
            item={"About"}
            setMenuOpen={setMenuOpen}
          />
          <MenuItem
            list={list}
            index={index}
            item={"Projects"}
            setMenuOpen={setMenuOpen}
          />
          <MenuItem
            list={list}
            index={index}
            item={"Portfolio"}
            setMenuOpen={setMenuOpen}
          />
          <MenuItem
            list={list}
            index={index}
            item={"Skills"}
            setMenuOpen={setMenuOpen}
          />
          <MenuItem
            list={list}
            index={index}
            item={"Contact"}
            setMenuOpen={setMenuOpen}
          />
        </ul>
      </div>
    </div>
  );
}
