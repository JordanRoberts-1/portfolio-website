import React from "react";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-[url('../public/images/HomepageBackground.jpg')] bg-no-repeat bg-cover bg-center bg-fixed grid place-items-center"
    >
      <div className="text-6xl 12 font-retro">
        <Typewriter
          options={{
            strings: [
              "Hi, I'm Jordan",
              "Check Out My Work",
              "Like What You See?",
              "Let's Talk",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 3000,
          }}
        />
        <h1 className="text-white text-2xl font-mono text-center animate-fade-in-up opacity-0">
          Software Developer
        </h1>
        <div className="space-x-4 flex flex-row py-2 justify-center">
          <button className="w-40 text-white font-light text-2xl px-1 py-1 bg-zinc-900 bg-opacity-[95%] hover:bg-opacity-100 hover:text-yellow-200 rounded-md animate-fade-in-up opacity-0">
            Resume
          </button>
          <button className="w-40 text-white font-light text-2xl px-1 py-1 bg-zinc-900 bg-opacity-[95%] hover:bg-opacity-100 hover:text-yellow-200 rounded-md animate-fade-in-up opacity-0">
            Projects
          </button>
        </div>
        <div className="flex flex-row space-x-32 justify-center content-center mt-2 animate-fade-in-up opacity-0">
          <LinkedIn />
          <Github />
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-52 bg-gradient-to-t from-black"></div>
      <div className=" absolute bottom-2">
        <Link to="Projects" smooth={true} duration={750}>
          <ChevronDoubleDownIcon className="w-12 stroke-white animate-bounce hover:stroke-yellow-200 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
