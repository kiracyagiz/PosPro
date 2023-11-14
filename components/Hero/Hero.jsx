import React from "react";
import Image from "next/image";
import ButtonPrimary from "../General/ButtonPrimary";
import { useTranslation } from "next-i18next";
import TextPrimary from '../General/TextPrimary'
import ThirdAd from "../Ads/ThirdAd";

const Hero = () => {
    const { t } = useTranslation("common");
  
    const hero = t("Hero", { returnObjects: true });

  return (
    <div className="bg-gray-100  " >

      <div className=" md:p-0 flex flex-col py-10 lg:py-0 lg:h-[80vh] lg:flex-row lg:gap-x-16 mx-auto items-center justify-center  font-bold  mt-8 lg:mx-40 ">
        <div className="text-center items-center flex flex-col gap-y-4 mt-6"> 
        <p className="roboto700 text-3xl ">{hero.title}</p>
        <TextPrimary text={hero.desc} font={'text-2xl'} fontStyle={'font-bold'}/>
        <ButtonPrimary text={hero.heroButton} fontStyle={"font-bold "} locate={'https://app.pos.al/'}/>

      </div>
        <div className=" py-14  items-center flex justify-center">
          <Image src={'/cope.png'}  alt="computerpng" width={700} height={700}/>
        </div>
      </div>
      <ThirdAd/>
    </div>
  );
};


export default Hero;
