import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [emailPopup, setEmailPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6a1a0x1",
        "template_icncnoq",
        form.current,
        "iljCdSkIikfiuBObo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailPopup(true);
        },
        (error) => {
          console.log(error.text);
          setEmailPopup(false);
        }
      );
    e.target.reset();
  };

  return (
    <div
      name="About Me"
      className="w-full h-fit min-h-screen bg-gradient-to-b from-stone-600 to-black flex flex-col items-center space gap-8"
    >
      <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-900 shadow-lg p-8 mt-32">
        <h1 className="text-white text-5xl font-retro font-bold">About Me</h1>
        <p className="max-w-[45vw] text-base sm:text-2xl text-neutral-300">
          I'm a software developer graduating with a bachelors with a major in
          Computer Science and minor in math from the University of Oklahoma in
          the spring of 2023. I'm particularly interested in lower level
          languages and software and have experience with: C++, JS, Python,
          Java, SQL.
          <br />
          <br />
          Frameworks/Libraries I've used include: OpenGL, glm, imgui, React,
          TailwindCSS.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-900 shadow-lg p-8">
        <h1 className="text-white text-5xl font-retro font-bold">Contact Me</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-12 rounded-lg p-8 min-w-[40vw]"
        >
          <div className="grid grid-rows-1 grid-cols-2 grid-flow-row gap-x-4 min-w-[50%]">
            <input
              type="text"
              name="user_firstname"
              className="shadow appearance-none border-b-2 outline-none border-b-neutral-600 w-full px-1 bg-transparent text-white text-2xl leading-tight placeholder:text-neutral-400"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="user_lastname"
              className="shadow appearance-none border-b-2 outline-none border-b-neutral-600 w-full px-1 bg-transparent text-white text-2xl leading-tight placeholder:text-neutral-400"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="user_email"
              className="shadow appearance-none border-b-2 outline-none border-b-neutral-600 w-full px-1 bg-transparent text-white text-2xl leading-tight placeholder:text-neutral-400"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <textarea
              className="shadow appearance-none border border-neutral-800 outline-none rounded w-full px-3 text-white text-2xl leading-tight min-h-[12rem] bg-transparent placeholder:text-neutral-400"
              placeholder="What do you want to talk about?"
              name="message"
            />
          </div>
          <input
            type="submit"
            value="Send Email"
            className="shadow border border-neutral-900 rounded-full px-3 py-2 text-neutral-400 text-2xl relative w-fit bg-neutral-800 ml-auto mr-0 hover:shadow-lg hover:text-yellow-200 hover:cursor-pointer"
          />
        </form>
      </div>
      {emailPopup && (
        <div className="text-3xl text-white fixed left-2 bottom-2 bg-neutral-900 rounded-lg p-4 animate-fade-in-up-fade-out">
          Email Sent Successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
