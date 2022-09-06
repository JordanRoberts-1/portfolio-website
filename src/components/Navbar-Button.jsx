import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
export function NavbarButton(props) {
  return (
    <Link
      to={props.title}
      smooth={true}
      duration={500}
      className="text-white text-2xl cursor-pointer hover:text-yellow-200 md:text-4xl"
    >
      {props.title}
    </Link>
  );
}
