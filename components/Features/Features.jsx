import React from "react";
import FeaturesCard from "./FeaturesCard";
import { useTranslation } from "next-i18next";

const Features = () => {
  const {t} = useTranslation("common");
  const featuresData = t('common:Features' , {returnObjects: true})
  const titles = t('Titles' , {returnObjects: true})


  return (
    <div className="h-fit bg-gray-100 " id="features" >
      <h2 className="text-3xl font-semibold text-center ">
        {titles.features}
      </h2>
      <div>  
      </div>
      <div className="flex flex-col gap-y-6  bg-gray-100">
        {featuresData.map((dt,i) => (
            <FeaturesCard 
            dt={dt}
            key={i}
            />
        ))}

      </div>
    

      <div>
     
      </div>
    </div>
  );
};

export default Features;
