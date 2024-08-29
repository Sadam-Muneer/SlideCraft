// src/pages/Intro.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const members = [
  {
    name: "Sadam Muneer",
    role: "MERN Stack Developer",
    photo: "/src/assets/sadam.jpg",
  },
  {
    name: "Husnain Asad",
    role: "Frontend developer",
    photo: "/src/assets/husnain.jpg",
  },
  {
    name: "Hamzi Malik",
    role: "Database Administrator",
    photo: "/src/assets/hamzii.jpg",
  },
];

const teacher = {
  name: "Dr. Abdul Razzaq",
  role: "Project Guide",
  photo: "/src/assets/sirRazzaq.jpeg",
};

const Intro = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center text-black p-4 sm:p-8">
      <div className="flex flex-col items-center justify-center flex-grow text-black bg-opacity-50 p-4 rounded-lg">
        <div className="text-center mb-12 py-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-4xl sm:text-6xl font-bold mb-8 text-black"
          >
            Introduction
          </motion.h1>

          {activeTab === null && (
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-base sm:text-xl text-black pb-7"
            >
              Click on a button below to learn more about our project.
            </motion.p>
          )}

          <div className="w-full max-w-5xl">
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab("guide")}
                className={`px-4 mx-3 ${
                  activeTab === "guide"
                    ? "bg-gray-700 text-white "
                    : "bg-white text-black border-2 border-gray-20"
                } rounded-lg`}
              >
                Project Guide
              </button>
              <button
                onClick={() => setActiveTab("members")}
                className={`py-2 px-4 ${
                  activeTab === "members"
                    ? "bg-gray-700 text-white "
                    : "bg-white text-black border-2 border-gray-20"
                } rounded-lg`}
              >
                Team Members
              </button>
            </div>

            {activeTab === "guide" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="bg-white text-black px-4 sm:p-6 rounded-lg"
              >
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black sm:p-6 rounded-lg text-center flex flex-col items-center"
                  >
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-teal-500"
                    />
                    <h3 className="text-lg sm:text-2xl font-bold mb-2">
                      {teacher.name}
                    </h3>
                    <p className="text-sm sm:text-lg">{teacher.role}</p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === "members" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="bg-white text-black p-4 sm:p-6 rounded-lg"
              >
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  {members.map((member, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-teal-500"
                      />
                      <h3 className="text-base sm:text-xl font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-md">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
