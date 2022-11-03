import React from "react";
import "../Styles/header.css";
import logo from "../Assets/logo-hrnet.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="tree" />
      </NavLink>
      <nav className="navbar">
        <NavLink className="link" to="/create">Create Employee</NavLink>
        <NavLink className="link" to="/employee">Employee List</NavLink>
      </nav>
    </header>
  );
};

export default Header;
