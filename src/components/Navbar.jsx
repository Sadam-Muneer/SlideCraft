import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-padd-container">
      <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 shadow-md z-50">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex justify-between w-full max-w-screen-lg">
            <div className="text-xl font-bold">My Presentation</div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul
            className={`md:flex space-x-6 ${
              isOpen ? "block" : "hidden"
            } md:block mt-4 md:mt-0`}
          >
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/intro" className="hover:text-gray-300">
                Introduction
              </Link>
            </li>
            <li>
              <Link to="/slides" className="hover:text-gray-300">
                Slides
              </Link>
            </li>
            <li>
              <Link to="/project-report" className="hover:text-gray-300">
                Project Report
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
