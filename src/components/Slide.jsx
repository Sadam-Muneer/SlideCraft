// src/components/Slide.js
import React from "react";

const Slide = ({ title, content, image }) => {
  return (
    <div className="text-white max-padd-container">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-auto mb-4 rounded-lg shadow-md"
        />
      )}
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default Slide;
