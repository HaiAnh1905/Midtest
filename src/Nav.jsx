import React from "react";
import Input from "./Input";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <h1>ANONIME</h1>
      <div className="homeLink">
        <a href="">Home</a>
      </div>
      <div className="listLink">
        <a href="">List anime</a>
      </div>

      <div id="searchBar">
        <Input></Input>
      </div>
    </div>
  );
};

export default Nav;
