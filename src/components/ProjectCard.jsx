import React from "react";
import LanguageBubble from "./LanguageBubble";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Github from "./Github";

const ProjectCard = ({
  preview,
  image,
  title,
  languages,
  frameworks,
  description,
  link,
}) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  const handleClick = () => {
    setCardExpanded(!cardExpanded);
  };

  return (
    <>
      <div
        className="w-[85vw] xs:w-64 border-2 border-zinc-900 rounded-xl h-80 shadow-lg 
     hover:from-black hover:via-neutral-900 hover:to-light shadow-black cursor-pointer bg-gradient-to-b from-black via-neutral-800 to-light flex flex-col
     transform transition duration-300 hover:scale-125"
        onClick={handleClick}
      >
        <img
          src={preview}
          className="object-cover h-64 xs:h-[60%] w-full rounded-xl pb-1"
        />
        <h1 className="text-white text-xl p-2 border-t-2 border-zinc-800 font-retro text-center">
          {title}
        </h1>
        <div className="flex flex-row flex-1 items-end">
          {languages.map((language, i) => (
            <LanguageBubble title={language} key={i} />
          ))}
        </div>
      </div>
      {cardExpanded ? (
        <div
          className="fixed z-20 w-[100%] h-screen left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClick}
        >
          <div
            className="fixed z-30 w-[80%] h-[90%] bg-gradient-to-b from-neutral-900 via-neutral-800 to-zinc-800 rounded-xl shadow-2xl shadow-black lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[100%] p-2 border-zinc-600 hidden lg:inline-block">
              <img
                src={image}
                alt="Flappy Bird Recreated"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="h-[100%] flex flex-col items-center p-4 gap-8">
              <h1 className="text-4xl text-center text-zinc-200 mt-8 border-b-2 pb-4 border-b-zinc-200 w-fit font-retro font-semibold">
                {title}
              </h1>
              <p className="text-2xl text-zinc-200 self-start font-sans">
                {description}
              </p>
              <h1 className="text-2xl text-zinc-200 self-start font-sans">{`Frameworks/Libraries: ${frameworks}`}</h1>
              <a href={link} target="_blank">
                <Github />
              </a>
            </div>
            <XMarkIcon
              className="absolute z-40 stroke-zinc-200 w-12 top-4 right-4 cursor-pointer transform transition duration-300 hover:rotate-180"
              onClick={handleClick}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectCard;
