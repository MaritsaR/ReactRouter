import React from "react";
import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Yellow from "./Yellow";
import Green from "./Green";
import Orange from "./Orange";

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
        <Route path="/orange" element={<Orange />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
