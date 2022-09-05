import { NavbarButton } from "./Navbar-Button";
import React from "react";

import { CodeBracketIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-screen h-20 flex items-center bg-zinc-800 drop-shadow-lg space-x-4 p-4">
      <CodeBracketIcon className=" stroke-white h-8" />
      <NavbarButton title="Resume" />
      <NavbarButton title="Projects" />
      <NavbarButton title="About Me" />
      <NavbarButton title="Contact Me" />
    </div>
  );
};

export default Navbar;
