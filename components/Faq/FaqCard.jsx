"use client";

import {  useState } from "react";

const FaqComp = ({ text, desc }) => {
  const [item, setItem] = useState(false);

  return (
    <div
      className=" md:w-1/2 md:mx-auto flex flex-col  gap-x-0 bg-white p-8 rounded-lg cursor-pointer border-2 shadow-xl border-gray-200"
      onClick={() => setItem(!item)}
    >
      <div className="flex justify-between text-xl roboto700">
        <p className=" ">{text}</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128 192l128 128 128-128z"></path>
        </svg>
      </div>
      <p className={`${item ? "block" : "hidden"} mt-8 roboto400`}>{desc}</p>
    </div>
  );
};

export default FaqComp;
