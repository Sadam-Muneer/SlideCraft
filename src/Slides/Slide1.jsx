// src/Slides/Slide1.js
import React from "react";
import webDevelopmentImage from "../assets/webdevelopment.jpeg";
import Slide from "../components/Slide";

const Slide1 = () => {
  return (
    <Slide
      title="Introduction to the Importance of Web Development"
      content="In the digital age, web development has become a cornerstone of technological advancement. The importance of web development for the future cannot be overstated..."
      image={webDevelopmentImage}
    />
  );
};

export default Slide1;
