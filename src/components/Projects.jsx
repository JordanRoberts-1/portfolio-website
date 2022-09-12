import React from "react";
import placeholder from "../assets/placeholder-flappybird.png";
import PortfolioPreview from "../assets/portfolio-website-picture.png";
import PortfolioFull from "../assets/portfolio-website-full.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const flappyBirdDescription =
    "Flappy bird written in low-level C++ and OpenGL which can be played by either a player or an AI. Q-Learning was implemented using a custom Neural Network library to learn how to play the game. The agent can save their training to be loaded and played at a later time.";

  return (
    <div
      name="Projects"
      className="w-full h-fit bg-gradient-to-b from-black via-zinc-800 to-stone-600 flex flex-col items-center min-h-screen"
    >
      <h1 className="text-white text-5xl mt-32 font-retro mb-2 font-bold">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        <ProjectCard
          preview={placeholder}
          image={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
          frameworks="OpenGL, glm, imGui, Eigen"
          description={flappyBirdDescription}
        ></ProjectCard>
        <ProjectCard
          preview={PortfolioPreview}
          image={PortfolioFull}
          title="Portfolio Website"
          languages={["JS", "React", "Tailwind"]}
          frameworks="React, TailwindCSS, react-scroll, typewriter-effect"
        ></ProjectCard>{" "}
        <ProjectCard
          preview={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
        ></ProjectCard>{" "}
        <ProjectCard
          preview={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
