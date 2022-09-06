import React from "react";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-[url('../public/images/HomepageBackground.jpg')] bg-no-repeat bg-cover bg-center bg-fixed grid place-items-center"
    >
      <div className="">
        <h1 className="text-white text-5xl font-mono text-center">
          Hi, I'm Jordan
        </h1>
        <h1 className="text-white text-2xl font-mono text-center animate-fade-in-up">
          Software Developer
        </h1>
        <div className="space-x-4 flex flex-row py-2 justify-center">
          <button className="w-[45%] text-white font-light text-2xl px-1 py-1 bg-zinc-800 bg-opacity-[95%] hover:bg-opacity-100 hover:text-yellow-200 rounded-md animate-fade-in-up">
            Resume
          </button>
          <button className="w-[45%] text-white font-light text-2xl px-1 py-1 bg-zinc-800 bg-opacity-[95%] hover:bg-opacity-100 hover:text-yellow-200 rounded-md animate-fade-in-up">
            Projects
          </button>
        </div>
        <div className="flex flex-row space-x-32 justify-center content-center mt-2 animate-fade-in-up">
          <LinkedIn />
          <Github />
        </div>
      </div>

      <div className=" absolute bottom-2">
        <ChevronDoubleDownIcon className="w-12 stroke-white animate-bounce hover:stroke-yellow-200 cursor-pointer" />
      </div>
    </div>
  );
};

export default Home;
