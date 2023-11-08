import React from "react";
import { AiFillCheckCircle, AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
const PriceBox = ({ dt ,isPage,key}) => {

  return (
    <Link className=" w-70  min-h-[420px] mt-8 relative  bg-white border-2 border-gray-500 rounded-lg mx-auto   flex flex-col gap-y-2 hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300" 
    href={'https://app.pos.al/'}
    target="_blank"
    key={key}
    >
    <Image  src={dt.image} width={70} height={70} className="mx-auto m-2"/>
      <div className="  border-b-2 border-gray-300">
        <p className="text-center font-bold mb-4   bg-primaryYellow w-fit flex mx-auto px-4 rounded py-1">
          {dt.header}
        </p>
      </div>

      <div>
        <p className=" text-sm px-5 py-4 font-semibold ">{dt.desc}</p>
      </div>

      <button className="bg-primaryYellow absolute bottom-0 mb-2    border-2 left-7 border-black  p-2 w-4/5">Go to page</button>

      
    </Link>
  );
};

export default PriceBox;
