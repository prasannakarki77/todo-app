import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";
const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">#todo</h1>
      <nav className="nav">
        <NavLink className="nav__link" to="/">
          <span className="nav__text">All</span>
        </NavLink>
        <NavLink className="nav__link" to="/active">
          <span className="nav__text">Active</span>
        </NavLink>
        <NavLink className="nav__link" to="/completed">
          Completed
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
