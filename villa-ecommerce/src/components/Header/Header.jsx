// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";
import img from "./logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h1>Villa Frida Mexican Tacos Food</h1>
      <Link to="/">
        <img src={img} alt="imagen" width="150px" />
      </Link>
    </div>
  );
};

export default Header;
