import { NavbarButton } from "./Navbar-Button";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const handleClick = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      <div className="w-screen h-20 items-center bg-zinc-800 drop-shadow-lg space-x-6 p-4 hidden md:flex fixed">
        <Link to="Home" smooth={true} duration={500}>
          <CodeBracketIcon className=" stroke-white h-8 hover:stroke-yellow-200 cursor-pointer" />
        </Link>
        <NavbarButton title="Resume" />
        <NavbarButton title="Projects" />
        <NavbarButton title="About Me" />
        <NavbarButton title="Contact Me" />
      </div>
      <div className="w-screen h-16 bg-zinc-800 drop-shadow-lg md:hidden fixed">
        {!navMenu ? (
          <Bars3Icon
            className="absolute md:hidden stroke-white w-16 right-4"
            onClick={handleClick}
          />
        ) : (
          <XMarkIcon
            className="absolute md:hidden stroke-white w-16 right-4"
            onClick={handleClick}
          />
        )}

        <ul
          className={
            !navMenu
              ? "hidden"
              : "bg-zinc-800 w-full px-4 py-2 m-0 inline-block"
          }
        >
          <li className="text-6xl text-white border-b-2 text-center">Resume</li>
          <li className="text-6xl text-white border-b-2 text-center">
            Projects
          </li>
          <li className="text-6xl text-white border-b-2 text-center">
            About Me
          </li>
          <li className="text-6xl text-white border-b-2 text-center">
            Contact Me
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
