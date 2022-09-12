import React from "react";

const LanguageBubble = ({ title }) => {
  return (
    <div
      className={`text-center text-xl text-gray-200 w-fit p-1 px-3 rounded-full bg-zinc-800 border-zinc-400 ml-2 mb-1`}
    >
      {title}
    </div>
  );
};

export default LanguageBubble;
