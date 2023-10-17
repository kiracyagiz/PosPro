import React from "react";
import Image from "next/image";
import computerpng from "../../public/character.png";
import ButtonPrimary from "../General/ButtonPrimary";
import { useTranslation } from "next-i18next";
import TextPrimary from '../General/TextPrimary'

const Hero = () => {
    const { t } = useTranslation("common");
  
    const hero = t("Hero", { returnObjects: true });

  return (
    <div className="bg-gray-100  py-28 lg:h-fit" >

      <div className=" md:p-0 flex flex-col lg:flex-row lg:gap-x-16 items-center font-bold mx-8 lg:mx-40 ">
        <div className="text-center items-center flex flex-col gap-y-4 mt-2"> 
        <p className="roboto700 text-3xl ">{hero.title}</p>
        <TextPrimary text={hero.desc} font={'text-2xl'} fontStyle={'font-bold'}/>
        <ButtonPrimary text={hero.heroButton} fontStyle={"font-bold "} />

      </div>
        <div className=" py-14 lg:w-5/6 items-center flex justify-center">
          <Image src={computerpng}  alt="computerpng"/>
        </div>
      </div>
    </div>
  );
};


export default Hero;
