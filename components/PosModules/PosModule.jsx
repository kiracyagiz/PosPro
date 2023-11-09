import { useTranslation } from "next-i18next";
import PosCards from "./PosCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'

const PosModule = () => {
  const { t } = useTranslation("common");
  const moduleData = t("common:PosModulesLanding", { returnObjects: true });
  const titles = t('Titles' , {returnObjects: true})

  const CustomPrevArrow = (props) => (
    <div
      onClick={props.onClick}
      className="absolute top-1/2 -left-[84px]  transform -  lg:-mx-0 z-30 lg:block text-primaryYellow -translate-y-1/2 cursor-pointer mx-12  my-4"
    >
      <BsArrowLeftCircleFill  size={30}  className='bg-black rounded-full '/>
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div
      onClick={props.onClick}
      className="absolute top-1/2 -right-20 transform    lg:-mx-0 z-30 text-primaryYellow lg:block -translate-y-1/2 cursor-pointer mx-12  my-4"
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
    <div className=" my-10 ">
      <h2 className="text-3xl font-semibold text-center mt-8">{titles.modules}</h2>

      <div className="hidden lg:flex gap-x-8 p-8 mx-auto justify-center mt-10">
        {moduleData.map((dt, i) => (
          <div key={i}>
            <PosCards dt={dt}  />
          </div>
        ))}
      </div>
      <div className="  mx-auto p-14 md:px-40 lg:p-20 block  lg:hidden">
        <Slider {...settings}>
          {moduleData.map((dt, i) => (
            <PosCards dt={dt}  isPage={false} key={i}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PosModule;
