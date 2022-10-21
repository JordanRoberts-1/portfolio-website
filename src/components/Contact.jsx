import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-fit min-h-screen bg-gradient-to-b from-stone-600 to-black flex flex-col items-center space gap-8"
    >
      <h1 className="text-white text-5xl mt-32 font-retro font-bold">
        About Me
      </h1>
      <p className="max-w-[40vw] text-2xl">
        I'm a software developer with a bachelors in Computer Science and minor
        in math from the University of Oklahoma. I'm particularly interested in
        lower level languages and software and have experience with: C++, JS,
        Python, Java.
        <br />
        <br />
        Frameworks/Libraries I've used include: OpenGL, glm, imgui, React,
        TailwindCSS.
      </p>
      <h1 className="text-white text-5xl font-retro font-bold">Contact Me</h1>
      <form className="flex flex-col gap-y-12 rounded-lg bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-900 shadow-lg  p-8 min-w-[40vw]">
        <div className="grid grid-rows-1 grid-cols-2 grid-flow-row gap-x-4 min-w-[50%]">
          <input
            type="text"
            id="fname"
            className="shadow appearance-none border-b-2 outline-none border-b-neutral-600 w-full px-1 bg-transparent text-white text-2xl leading-tight placeholder:text-neutral-400"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lname"
            className="shadow appearance-none border-b-2 outline-none border-b-neutral-600 w-full px-1 bg-transparent text-white text-2xl leading-tight placeholder:text-neutral-400"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col">
          <input
            id="email"
            type="email"
            className="shadow appearance-none border-b-2 outline-none border-b-neutral-600 w-full px-1 bg-transparent text-white text-2xl leading-tight placeholder:text-neutral-400"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            className="shadow appearance-none border border-neutral-800 outline-none rounded w-full px-3 text-white text-2xl leading-tight min-h-[12rem] bg-transparent placeholder:text-neutral-400"
            placeholder="What do you want to talk about?"
          />
        </div>
        <input
          type="submit"
          value="Send Email"
          className="shadow border border-neutral-900 rounded-full px-3 text-neutral-400 text-2xl relative w-fit bg-neutral-800 ml-auto mr-0 hover:shadow-lg hover:text-yellow-200 hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
