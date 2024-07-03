import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import menu from "../assets/menu.svg";

export default function NavBar() {
  const [toggle, setToggle] = useState("hide");

  const changeToggle = () => {
    if (toggle == "hide") {
      setToggle("nav-links");
    } else if (toggle == "nav-links") {
      setToggle("hide");
    }
  };
  return (
    <div className="box-margin nav-bar font1 ">
      <div className="mobile-nav-view">
        <button onClick={changeToggle}>
          <img src={menu} alt="" className="menu-btn nav-icon" />
        </button>

        <p className="font-medium">
          te<span>in.</span>
        </p>
      </div>

      <div id="links" className={toggle}>
        <NavLink to="/" className="desk-link">
          Home
        </NavLink>
        <NavLink to="/" className="desk-link">
          About
        </NavLink>
        <NavLink to="/" className="desk-link">
          Skills
        </NavLink>
        <NavLink to="/" className="desk-link">
          Projects
        </NavLink>

        <br />
        <button className="desk-link">Contact</button>
      </div>
    </div>
  );
}
