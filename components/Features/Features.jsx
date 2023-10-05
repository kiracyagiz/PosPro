import React from "react";
import FeaturesCard from "./FeaturesCard";
import { useTranslation } from "next-i18next";

const Features = () => {
  const {t} = useTranslation("common");
  const featuresData = t('common:Features' , {returnObjects: true})
  const titles = t('Titles' , {returnObjects: true})


  return (
    <div className="h-fit bg-gray-100 py-6" id="features" >
      <h2 className="text-3xl font-semibold text-center py-10">
        {titles.features}
      </h2>
      <div>  
      </div>
      <div className="flex flex-col gap-y-32 mt-8 bg-gray-100">
        {featuresData.map((dt,i) => (
            <FeaturesCard 
            ImagepositionLeft={dt.imagePositionLeft}
            imagesrc={dt.image}
            h2={dt.header}
            h1={dt.title}
            p={dt.desc}
            primary1={dt.category1}
            primary2={dt.category2}
            key={i}
            />
        ))}

      </div>
    </div>
  );
};

export default Features;
