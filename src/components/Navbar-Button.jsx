import React from "react";
export function NavbarButton(props) {
  return (
    <h1 className="text-white text-2xl hover:underline hover:underline-offset-4 cursor-pointer">
      {props.title}
    </h1>
  );
}
