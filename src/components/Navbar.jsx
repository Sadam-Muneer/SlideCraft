import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaHome, FaInfoCircle, FaSlideshare, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarWithMaterialDesign = () => {
  const [openNav, setOpenNav] = useState(false);

  // Handle resize to close navbar on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the menu when a link is clicked
  const closeMenu = () => setOpenNav(false);

  const navList = (
    <div>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            to="/"
            className="flex items-center text-white"
            onClick={closeMenu}
          >
            <FaHome className="mr-2 text-white" /> Home
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            to="/intro"
            className="flex items-center text-white"
            onClick={closeMenu}
          >
            <FaInfoCircle className="mr-2 text-white" /> Introduction
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            to="/slides"
            className="flex items-center text-white"
            onClick={closeMenu}
          >
            <FaSlideshare className="mr-2 text-black" /> Slides
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        ></Typography>
      </ul>
    </div>
  );

  return (
    <div>
      <MTNavbar className="z-10 h-max max-w-full bg-black rounded-full px-4 py-2 my-1 lg:px-8 lg:py-4 fixed top-0 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-white"
          >
            My Presentation
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Link
            to="/project-report"
            className="flex items-center text-white"
            onClick={closeMenu}
          >
            <FaFileAlt className="mr-2 text-white" /> Project Report
          </Link>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </MTNavbar>
    </div>
  );
};

export default NavbarWithMaterialDesign;
