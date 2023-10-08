import React from "react";
import PriceBox from "../Price/PriceBox";
import { useTranslation } from "next-i18next";
import SecondAd from "../Ads/SecondAd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonSecondary from "../General/ButtonSecondary";

const Price = () => {
  const { t } = useTranslation("common");
  const priceData = t('common:PriceInfo', { returnObjects: true });
  const price = t("Price", { returnObjects: true });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="pricing" className="bg-gray-100 py-14">
      <div className="h-fit p-8">
        <p className="text-center text-3xl font-bold ">{price.title}</p>

        <div className=" hidden lg:flex flex-wrap    md:mx-20  gap-y-12 ">
            {priceData.map((dt,i)=> (
                <PriceBox
                feature={dt.header}
                title={dt.title}
                price={dt.price}
                desc={dt.desc}
                month={dt.monthly}
                button= {dt.priceButton}
                key={i}
                />
            ))}

        </div>
      </div>
      <SecondAd/>
      <div className="  mx-auto p-8 md:px-40 lg:p-20 block lg:hidden">
        <Slider {...settings}>
          {priceData.map((dt, i) => (
                <PriceBox
                feature={dt.header}
                title={dt.title}
                price={dt.price}
                desc={dt.desc}
                month={dt.monthly}
                button= {dt.priceButton}
                key={i}
                />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Price;
