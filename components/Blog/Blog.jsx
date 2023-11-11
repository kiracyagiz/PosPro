import BlogBox from "../Blog/BlogBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'
import { useTranslation } from "next-i18next";

const Blog = () => {
  const { t } = useTranslation("common");
  const offerData = t("common:WhatWeOffer", { returnObjects: true });
  const offerInfoData = t("common:WhatWeOfferData", { returnObjects: true });

  const CustomPrevArrow = (props) => (
    <div
      onClick={props.onClick}
      className="absolute top-1/2 left-0  transform -mx-16  lg:-mx-0 z-30 lg:block text-primaryYellow -translate-y-1/2 cursor-pointer p-16"
    >
      <BsArrowLeftCircleFill  size={30}  className='bg-black rounded-full '/>
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div
      onClick={props.onClick}
      className="absolute top-1/2 right-0 transform  -mx-16 lg:-mx-0 z-30 text-primaryYellow lg:block -translate-y-1/2 cursor-pointer p-16"
    >
      <BsArrowRightCircleFill  size={30} className='bg-black rounded-full' />
    </div>
  );
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
    <div className="bg-gray-100 overflow-hidden ">
        <div className="text-center flex flex-col mt-14 gap-y-8">
        <div>
        <h3 className="text-lg roboto700 text-primaryYellow">{offerData.header}</h3>
        <h2 className="text-3xl mt-2 roboto700">{offerData.title}</h2>
        </div>
        <h3 className="text-sm font-semibold md:text-lg ">{offerData.desc}</h3>
      </div>
      <div className=" px-4 lg:p-0  lg:mx-auto" >
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
