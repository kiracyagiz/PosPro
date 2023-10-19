import React from "react";
import PriceBox from "../Price/PriceBox";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstAd from "../Ads/FirstAd";
const Price = () => {
  const { t } = useTranslation("common");
  const priceData = t("common:PriceInfo", { returnObjects: true });
  const price = t("Price", { returnObjects: true });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="pricing" className="bg-gray-100  mb-6">
      <FirstAd />
      <div className="h-fit p-8">
        <p className="text-center text-3xl font-bold ">{price.title}</p>

        <div className=" hidden lg:flex flex-wrap    md:mx-20  gap-y-12 ">
          {priceData.map((dt, i) => (
            <PriceBox key={i} dt={dt} />
          ))}
        </div>
      </div>
      <div className="  mx-auto p-8 md:px-40 lg:p-20 block lg:hidden">
        <Slider {...settings}>
          {priceData.map((dt, i) => (
            <PriceBox dt={dt} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Price;
