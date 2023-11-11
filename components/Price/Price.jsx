import React from "react";
import PriceBox from "../Price/PriceBox";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstAd from "../Ads/FirstAd";
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'
const CustomPrevArrow = (props) => (
  <div
    onClick={props.onClick}
    className="absolute top-1/2 -left-16  transform -  lg:-mx-0 z-30 lg:block text-primaryYellow -translate-y-1/2 cursor-pointer mx-12  my-4"
  >
    <BsArrowLeftCircleFill  size={30}  className='bg-black rounded-full '/>
  </div>
);

const CustomNextArrow = (props) => (
  <div
    onClick={props.onClick}
    className="absolute top-1/2 -right-16 transform    lg:-mx-0 z-30 text-primaryYellow lg:block -translate-y-1/2 cursor-pointer mx-12  my-4"
  >
    <BsArrowRightCircleFill  size={30} className='bg-black rounded-full' />
  </div>
);
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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    
  };

  return (
    <div id="pricing" className="bg-gray-100  mb-6">
      <div className="h-fit p-8">
        <p className="lg:text-center text-3xl font-bold ">{price.title}</p>

        <div className=" hidden lg:flex justify-between lg:mx-24   md:gap-x-4  gap-y-12 ">
          {priceData.map((dt, i) => (
            <PriceBox key={i} dt={dt} isModule={false} isPage={true} />
          ))}
          
        </div>
      </div>
      <div className="  mx-auto p-8 md:px-40 lg:p-20 block  lg:hidden">
        <Slider {...settings}>
          {priceData.map((dt, i) => (
            <PriceBox dt={dt} key={i} isModule={false} isPage={true} />
          ))}
        </Slider>
      </div>
      <FirstAd />
    </div>
  );
};

export default Price;
