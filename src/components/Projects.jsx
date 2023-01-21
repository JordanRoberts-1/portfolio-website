import React from "react";
import placeholder from "../assets/placeholder-flappybird.png";
import PortfolioPreview from "../assets/portfolio-website-picture.png";
import PortfolioFull from "../assets/portfolio-website-full.png";
import PhysicsFull from "../assets/physics-cropped.png";
import PhysicsPreview from "../assets/physics-full.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const flappyBirdDescription =
    "Flappy bird written in low-level C++ and OpenGL. GLFW is used to handle the windowing and input events while glew is used as the backend for it.";
  const portfolioDescription =
    "The website that you're on! Written in Javascript using React and TailwindCSS. Reactive design that scales across mobile and desktop intuitively, Designed and implemented by me with a few helper libraries such as the typewriter effect on the home screen.";
  const physicsDescription =
    "2D physics and collision simulator in low level C++ and OpenGL. Rendering using a hyrbrid of instancing and batched rendering. Collision detection allows for rotating bodies using the Separated Axis Theorem and resolves collisions intuitively.";
  return (
    <div
      name="Projects"
      className="w-full h-fit bg-gradient-to-b from-black via-zinc-800 to-stone-600 flex flex-col items-center min-h-screen"
    >
      <h1 className="text-white text-5xl mt-32 font-retro mb-2 font-bold">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8">
        <ProjectCard
          preview={placeholder}
          image={placeholder}
          title="Homemade Flappy Bird"
          languages={["C++", "GLSL"]}
          frameworks="OpenGL, glm, glfw, imGui, Eigen, stbi"
          description={flappyBirdDescription}
          link="https://github.com/JordanRoberts-1/OpenGL-FlappyBird"
        ></ProjectCard>
        <ProjectCard
          preview={PortfolioPreview}
          image={PortfolioFull}
          title="Portfolio Website"
          languages={["JS", "React", "Tailwind"]}
          frameworks="React, TailwindCSS, react-scroll, typewriter-effect"
          description={portfolioDescription}
          link="https://github.com/JordanRoberts-1/portfolio-website"
        ></ProjectCard>{" "}
        <ProjectCard
          preview={PhysicsPreview}
          image={PhysicsFull}
          title="2D Physics Simulator in C++ and OpenGL"
          languages={["C++", "GLSL"]}
          frameworks="OpenGL, glm, glfw, imGui"
          description={physicsDescription}
          link="https://github.com/JordanRoberts-1/2DPhysicsSimulator"
        ></ProjectCard>{" "}
      </div>
    </div>
  );
};

export default Projects;
