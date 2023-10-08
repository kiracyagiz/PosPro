import React from "react";
import Image from "next/image";
import computerpng from "../../public/computerpng.png";
import ButtonPrimary from "../General/ButtonPrimary";
import { useTranslation } from "next-i18next";

const Hero = () => {
    const { t } = useTranslation("common");
  
    const hero = t("Hero", { returnObjects: true });

  return (
    <div className="bg-gray-100 h-4/5 md:h-screen  lg:h-4/5  py-20">
      <div className=" md:p-0 flex flex-col lg:flex-row lg:gap-x-16 items-center font-bold mx-8 lg:mx-60 ">
        <div className=" md:w-1/2  mt-14 md:pt-8 flex flex-col gap-y-6 md:py-12">
          <h3 className="roboto700 text-2xl max-w-xs">{hero.title}</h3>
          <p className="max-w-3xl roboto400 md:max-w-sm">{hero.desc}</p>
          <ButtonPrimary text={hero.heroButton} fontStyle={"roboto400"} />
        </div>
        <div className="mt-14 py-12 ">
          <Image src={computerpng}  alt="computerpng"/>
        </div>
      </div>
    </div>
  );
};


export default Hero;
