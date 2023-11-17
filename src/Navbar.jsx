import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">
      <Link to="/blue">blue</Link>
      <Link to="/red">red</Link>
      <Link to="/">home</Link>
      <Link to="/yellow">yellow</Link>
      <Link to="/green">green</Link>
      <Link to="/orange">orange</Link>
    </div>
  );
}

export default Navbar;
