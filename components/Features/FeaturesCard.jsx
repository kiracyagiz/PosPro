import React from "react";
import Image from "next/image";
import TextPrimary from "../General/TextPrimary";
import Link from "next/link";
const FeaturesCard = ({
  ImagepositionLeft,
  imagesrc,
  h1,
  h2,
  p,
  primary1,
  primary2,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col ${
          ImagepositionLeft ? "md:flex-row" : "md:flex-row-reverse"
        } lg:mx-72 gap-x-4  items-center  justify-evenly px-4 lg:p-0 gap-y-8  md:p-8 mt-8 lg:mt-20`}
      >
        <div>
          <Image
            src={imagesrc}
            alt="image"
            className="rounded-lg object-fill shadow-2xl hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300"
            width={400}
            height={300}
          ></Image>
        </div>
        <div className="flex flex-col ">
          <p className="tracking-tighter roboto400">{h2}</p>
          <p className="text-featuresH font-bold  max-w-sm roboto700  mb-6">
            {h1}
          </p>
          <p className="max-w-sm tracking-tight roboto400">{p}</p>
          <div
            className={` ${
              ImagepositionLeft ? "flex flex-row" : "flex flex-col"
            } gap-x-2 md:flex md:flex-row mt-4 roboto400`}
          >
            <TextPrimary font={"text-md"} text={primary1} />
            <TextPrimary font={"text-md"} text={primary2} />
          </div>
          <p>
            <Link href={"https://posal.tawk.help/"}>
              <svg
                className="w-5 h-auto mt-6 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 194.818 194.818"
                x="0px"
                y="0px"
                role="img"
                fill="var(--subtext-color)"
                width="194.818px"
                height="194.818px"
              >
                <g>
                  <path d="M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"></path>
                  <path d="M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2 C158,80.8,153.2,76.5,147.7,77.3z"></path>
                </g>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
