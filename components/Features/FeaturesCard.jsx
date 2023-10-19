import React from "react";
import Image from "next/image";
import TextPrimary from "../General/TextPrimary";
import Link from "next/link";
import FeaturesDesc from "./FeaturesDesc";
import {BsBoxArrowUpRight} from 'react-icons/bs'
const FeaturesCard = ({ dt }) => {
  return (
    <div>
      <div
        className={`flex flex-col 
        md:flex-row
        gap-x-16 lg:mx-72 items-center   px-4 lg:p-0 gap-y-8  md:p-8 mt-8 lg:mt-20`}
      >
        <div>
          <Image
            src={dt.image}
            alt="image"
            className="rounded-lg object-fill shadow-2xl hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex flex-col ">
          <p className="tracking-tighter roboto400">{dt.title}</p>
          <p className="text-featuresH font-bold  max-w-sm roboto700  mb-6">
            {dt.desc}
          </p>
          <div className="flex gap-x-8">
            <FeaturesDesc title={dt.extraTitle} desc={dt.extraDesc} />
            <FeaturesDesc title={"Vecorite"} desc={dt.secondDesc} />
          </div>
          <div
            className={`flex flex-row gap-x-2 md:flex md:flex-row mt-4 roboto400`}
          >
            <TextPrimary font={"text-md"} text={dt.category1} />
            <TextPrimary font={"text-md"} text={dt.category2} />
          </div>
          <p>
            <Link href={"https://posal.tawk.help/"}>
          <BsBoxArrowUpRight size={25} className='mt-8'/>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
