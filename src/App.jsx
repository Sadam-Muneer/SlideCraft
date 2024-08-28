// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Presentation from "./pages/AllSlides";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import ProjectReport from "./pages/ProjectReport";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slides" element={<Presentation />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project-report" element={<ProjectReport />} />
      </Routes>
    </Router>
  );
};

export default App;
