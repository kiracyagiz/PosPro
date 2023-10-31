import React from "react";
import Image from "next/image";
import FeaturesDesc from "./FeaturesDesc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
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
            width={550}
            height={550}
          ></Image>
        </div>
        <div className="flex flex-col ">
          <p className="text-featuresH font-bold  max-w-sm roboto700  mb-6">
            {dt.desc}
          </p>
          <div className="flex gap-x-8">
            <FeaturesDesc title={dt.extraTitle} desc={dt.extraDesc} />
            <FeaturesDesc title={"Vecorite"} desc={dt.secondDesc} />
          </div>

          <Link href={dt.locate} target="_blank">
            <BsBoxArrowUpRight size={25} className="mt-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
