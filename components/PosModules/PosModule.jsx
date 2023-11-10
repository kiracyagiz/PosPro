import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomPrevArrow from "../General/CustomPrevArrow";
import CustomNextArrow from "../General/CustomNextArrow";
import PosCards from "./PosCards";
const PosModule = () => {
  const { t } = useTranslation("common");
  const moduleData = t("common:PosModulesLanding", { returnObjects: true });
  const titles = t('Titles' , {returnObjects: true})

  
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
    <div className=" my-10 ">
   <div className="h-fit p-8">
        <p className="text-center text-3xl font-bold ">{titles.modules}</p>

        <div className=" hidden lg:flex flex-wrap    md:mx-20  gap-y-12 ">
          {moduleData.map((dt, i) => (
            <PosCards key={i} dt={dt} isModule={true} isPage={false} />
          ))}
          
        </div>
      </div>
      <div className="  mx-auto p-14 md:px-40 lg:p-20 block  lg:hidden">
        <Slider {...settings}>
          {moduleData.map((dt, i) => (
            <PosCards dt={dt}  isPage={false} key={i} isModule={true} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PosModule;
