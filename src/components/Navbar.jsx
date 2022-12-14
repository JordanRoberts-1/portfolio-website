import { NavbarButton } from "./Navbar-Button";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import LinkedIn from "./LinkedIn";
import Github from "./Github";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const handleClick = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      <div className="w-full h-20 items-center bg-zinc-900 drop-shadow-2xl space-x-12 p-8 hidden lg:flex fixed z-10">
        <Link to="Home" smooth={true} duration={500}>
          <CodeBracketIcon className=" stroke-white h-8 hover:stroke-yellow-200 cursor-pointer" />
        </Link>
        <NavbarButton title="Resume" />
        <NavbarButton title="Projects" />
        <NavbarButton title="About Me" />
        <NavbarButton title="Contact Me" />
        <div className="flex-row flex space-x-8 right-16 absolute">
          <LinkedIn />
          <Github />
        </div>
      </div>
      <div className="w-screen h-16 bg-zinc-800 drop-shadow-lg lg:hidden fixed z-10">
        {!navMenu ? (
          <Bars3Icon
            className="absolute lg:hidden stroke-white w-16 right-4"
            onClick={handleClick}
          />
        ) : (
          <XMarkIcon
            className="absolute lg:hidden stroke-white w-16 right-4"
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
          <li className="text-6xl text-neutral-300 border-b-neutral-400 border-b-2 text-center font-extralight">
            Resume
          </li>
          <li className="text-6xl text-neutral-300 border-b-neutral-400 border-b-2 text-center font-extralight">
            Projects
          </li>
          <li className="text-6xl text-neutral-300 border-b-neutral-400 border-b-2 text-center font-extralight">
            About Me
          </li>
          <li className="text-6xl text-neutral-300 border-b-neutral-400 border-b-2 text-center font-extralight">
            Contact Me
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
