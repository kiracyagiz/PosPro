import React from "react";
import firstadimg from "../../public/section.png";

import {  useTranslation } from "next-i18next";
import Image from "next/image";

const FirstAd = () => {
    const { t } = useTranslation("common");
    const firstAd = t("FirstAd", { returnObjects: true });
    const firstInfo = t("common:FirstAdInfo", {returnObjects: true})


  return (
    <div className="flex flex-col   py-4 md:flex-row">
        <Image src={firstadimg} alt="pos" className="hidden lg:block"/>
      <div className="w-full flex  flex-col bg-primaryYellow items-center gap-y-8 text-center">
        <div>
          <h3 className="roboto700 text-2xl mt-2">{firstAd.header}</h3>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row gap-x-24 gap-y-10 py-8 md:py-0 roboto700 ">
            {firstInfo.map((dt,i)=> (
                <div className="flex flex-col items-center" key={i}>
                    <Image src={dt.image} width={50} height={50} alt={dt.title}/>
                    <h3>{dt.title}</h3>
                </div>
            ))}
   
        </div>



      </div>
    </div>
  );
};

export default FirstAd;
