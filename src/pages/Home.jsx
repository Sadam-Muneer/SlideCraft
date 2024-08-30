import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStartedClick = () => {
    navigate("/intro");
  };

  return (
    <div
      className={`bg-gradient-to-r from-green-200 via-gray-700 to-gray-30 min-h-screen flex items-center justify-center text-black py-10 sm:py-16 ${
        isSpinning ? "animate-gradient" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="flex-1 mb-4 md:mb-0 text-center md:text-left md:mr-8 gap-4"
        >
          <h1 className="text-4xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
            Welcome to Our Amazing Presentation
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-black">
            Dive into our comprehensive presentation to explore project
            objectives, team insights, and more. Navigate through the slides to
            discover what we've been working on.
          </p>
          <p className="mb-6 text-black">
            Subject: Software Engineering
            <br />
            Course Code: SE101
            <br />
            Project: Automated Hostel Management System
          </p>
          <div className="relative inline-flex group">
            <div className="absolute inset-0 bg-gradient-to-r opacity-60 rounded-xl blur-lg group-hover:opacity-80 transition-opacity duration-500"></div>
            <button
              onClick={handleGetStartedClick}
              className={`relative px-8 py-4 font-bold text-white bg-black rounded-xl ${
                isSpinning ? "animate-spin" : ""
              }`}
            >
              Get Started
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className={`flex-1 flex justify-center ${
            isSpinning ? "animate-bounce" : ""
          }`}
        >
          <img
            className="w-full md:w-3/7 h-auto rounded-xl shadow-2xl border-2 border-gray-800"
            src="/src/assets/logo.jpeg"
            alt="Web Development"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
