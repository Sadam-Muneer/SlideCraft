// src/pages/Presentation.js
import React, { useState } from "react";
import Slide1 from "../Slides/Slide1";
import Slide2 from "../Slides/Slide2";
import Sidebar from "../components/Sidebar";

const slidesComponents = [
  {
    title: "Introduction",
    component: <Slide1 />,
    poster: "/src/assets/webdevelopment.jpeg",
  },
  { title: "Objective", component: <Slide2 />, poster: "" },
];

const Presentation = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar
        slides={slidesComponents}
        onSelectSlide={setCurrentSlideIndex}
        currentIndex={currentSlideIndex}
      />
      <div className="flex-1 bg-white p-6">
        {slidesComponents[currentSlideIndex].component}
      </div>
    </div>
  );
};

export default Presentation;
