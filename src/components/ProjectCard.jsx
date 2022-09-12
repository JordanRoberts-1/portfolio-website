import React from "react";
import LanguageBubble from "./LanguageBubble";

const ProjectCard = ({ image, title, languages }) => {
  return (
    <div
      className="w-[85vw] xs:w-64 border-2 border-zinc-900 rounded-xl h-fit shadow-lg 
     hover:from-black hover:via-neutral-900 hover:to-light shadow-black cursor-pointer bg-gradient-to-b from-black via-neutral-800 to-light flex flex-col
     transform transition duration-300 hover:scale-110"
    >
      <img
        src={image}
        className="object-cover h-64 xs:h-[50%] w-full rounded-xl pb-1"
      />
      <h1 className="text-white text-xl p-2 border-t-2 border-zinc-800 font-retro text-center">
        {title}
      </h1>
      <div className="flex flex-row flex-1 items-center">
        {languages.map((language, i) => (
          <LanguageBubble title={language} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
