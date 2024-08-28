// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ slides, onSelectSlide, currentIndex }) => {
  return (
    <div className="w-full md:w-1/4 bg-black py-20 overflow-y-auto">
      <ul className="space-y-2">
        {slides.map((slide, index) => (
          <li
            key={index}
            onClick={() => onSelectSlide(index)}
            className={`cursor-pointer p-2 text-white flex items-center ${
              currentIndex === index ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            {slide.poster && (
              <img
                src={slide.poster}
                alt={slide.title}
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
            )}
            {slide.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
