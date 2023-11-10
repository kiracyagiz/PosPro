import React from "react";
import Image from "next/image";
import FeaturesDesc from "./FeaturesDesc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
const FeaturesCard = ({ dt }) => {
  return (
  
      <div
      className={`flex flex-col md:flex-row lg:p-0 my-6 gap-x-20 md:p-8 w-500 h-500`}


      >
        <div className="lg:w-1/2">
          <Image
            src={dt.image}
            alt="image"
            width={800}
            height={800}
          ></Image>
        </div>
        <div className="flex flex-col  my-10 lg:my-0">
          <p className="text-featuresH font-bold  mx-auto lg:mx-0   max-w-sm roboto700  mb-6">
            {dt.desc}
          </p>
          <div className=" gap-y-10 flex flex-col  lg:flex-row mx-auto lg:mx-0  gap-x-10 lg:gap-x-8">
            <FeaturesDesc title={dt.extraTitle} desc={dt.extraDesc}  />
            <FeaturesDesc title={"Vecorite"} desc={dt.secondDesc} />
            
            <Link href={dt.locate} target="_blank" className="block lg:hidden"  >
            <BsBoxArrowUpRight size={25} className="mt-2" s/>
          </Link>
          </div>

          <Link href={dt.locate} target="_blank" className="hidden lg:block"  >
            <BsBoxArrowUpRight size={25} className="mt-8" s/>
          </Link>
        </div>
      </div>

  );
};

export default FeaturesCard;
