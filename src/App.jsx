import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import MainContainer from "./MainContainer.jsx";

function App() {
  return (
    <>
      <div id="container">
        <h1>My App</h1>
        <Navbar />
        <MainContainer />
      </div>
      <div>
        <footer id="footer">
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
          <Link to="/">home</Link>
          <Link to="/yellow">yellow</Link>
          <Link to="/green">green</Link>
          <Link to="/orange">orange</Link>
        </footer>
      </div>
    </>
  );
}

export default App;
