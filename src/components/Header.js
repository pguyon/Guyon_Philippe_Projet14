import React from "react";
import "../Styles/header.css";
import logo from "../Assets/logo-hrnet.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="tree" />
      <nav className="navbar">
        <a href="/home">Home</a>
        <a href="/employee">Employee</a>
      </nav>
    </header>
  );
};

export default Header;
