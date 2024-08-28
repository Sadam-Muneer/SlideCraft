// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8 text-white max-padd-container">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg max-w-3xl text-center">
        We are a dedicated team focused on delivering high-quality presentations
        and projects. Our mission is to create engaging and informative content
        that resonates with our audience.
      </p>
      <p className="mt-4 text-lg max-w-3xl text-center">
        Our team consists of experienced professionals who are passionate about
        innovation and excellence. We are committed to continuous learning and
        improvement.
      </p>
    </div>
  );
};

export default About;
