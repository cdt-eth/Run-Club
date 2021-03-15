import React from "react";
import logo from "../amrc-white.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <img className="navlogo" src={logo} alt="logo" />
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
