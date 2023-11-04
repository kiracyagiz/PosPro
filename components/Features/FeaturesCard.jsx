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
         lg:mx-60
         
        lg:p-0 gap-y-8  md:p-8 `}
      >
        <div >
          <Image
            src={dt.image}
            alt="image"
            width={550}
            height={550}
          ></Image>
        </div>
        <div className="flex flex-col  justify-center  ">
          <p className="text-featuresH font-bold text-center  max-w-sm roboto700  mb-6">
            {dt.desc}
          </p>
          <div className="  ml-16 gap-y-10 flex flex-col lg:flex-row  gap-x-10 lg:gap-x-8">
            <FeaturesDesc title={dt.extraTitle} desc={dt.extraDesc} />
            <FeaturesDesc title={"Vecorite"} desc={dt.secondDesc} />
            
          </div>

          <Link href={dt.locate} target="_blank" className="ml-16 " >
            <BsBoxArrowUpRight size={25} className="mt-8" s/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
