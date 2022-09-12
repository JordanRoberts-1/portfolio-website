import React from "react";
import placeholder from "../assets/placeholder-flappybird.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="w-full h-fit lg:h-screen bg-gradient-to-b from-black via-zinc-800 to-stone-600 flex flex-col items-center"
    >
      <h1 className="text-white text-5xl mt-32 font-retro mb-2">PROJECTS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProjectCard
          image={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
        ></ProjectCard>
        <ProjectCard
          image={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
        ></ProjectCard>{" "}
        <ProjectCard
          image={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
        ></ProjectCard>{" "}
        <ProjectCard
          image={placeholder}
          title="AI Plays Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
