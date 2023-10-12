import BlogBox from "../Blog/BlogBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonSecondary from "../General/ButtonSecondary";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Blog = () => {
  const { t } = useTranslation("common");
  const offerData = t("common:WhatWeOffer", { returnObjects: true });
  const offerInfoData = t("common:WhatWeOfferData", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  return (
    <div className="bg-gray-100 overflow-hidden">
        <div className="text-center flex flex-col mt-14 gap-y-8">
        <div>
        <h3 className="text-lg roboto700 text-primaryYellow">{offerData.header}</h3>
        <h2 className="text-3xl mt-2 roboto700">{offerData.title}</h2>
        </div>
        <h3 className="text-sm font-semibold md:text-lg ">{offerData.desc}</h3>
      </div>
      <div className="  mx-auto" >
      <Slider {...settings}>
      {offerInfoData.map((dt,i)=> (
                 <BlogBox offerData={dt} key={i} />

        ))}

      </Slider>



      </div>
    </div>
  );
};

export default Blog;
