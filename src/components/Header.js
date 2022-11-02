import React from "react";
import "../Styles/header.css";
import logo from "../Assets/logo-hrnet.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="tree" />
      <div className="links">
        <a href="/home">Home</a>
        <a href="/employee">Employee</a>
      </div>
    </nav>
  );
};

export default Header;
