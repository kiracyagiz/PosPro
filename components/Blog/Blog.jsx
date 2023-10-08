import BlogBox from "../Blog/BlogBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonSecondary from "../General/ButtonSecondary";

import { useTranslation } from "next-i18next";

const Blog = () => {
  const { t } = useTranslation("common");
  const blogData = t("common:Blog", { returnObjects: true });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 py-14">
      <p className="text-center text-3xl font-bold ">BLOG</p>

      <div className="hidden lg:flex lg:flex-wrap md:mx-20 justify-center gap-x-32 items-center gap-y-12 mt-14">
        {blogData.map((dt, i) => (
          <BlogBox
            image={dt.image}
            title={dt.title}
            desc={dt.desc}
            location={dt.location}
            key={i}
            button={dt.button}
          />
        ))}
      </div>

      <div className="  mx-auto p-8 md:px-40 lg:p-20 block lg:hidden">
        <Slider {...settings}>
          {blogData.map((dt, i) => (
              <div key={i} className="flex flex-col w-full  border-2  rounded-lg border-black shadow-xl bg-white hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300">
               <div className="w-4/5 mx-auto ">
               <img src={dt.image} className="w-full p-4 mx-auto"  alt={dt.title} />
               </div>
                <a href={dt.location}>
                  <div className="p-4 flex flex-col gap-y-4">
                    <p className="font-bold text-primaryYellow">
                      Posted on 28/09/2023
                    </p>
                    <h3 className="roboto700 text-sm">{dt.title}</h3>
                    <p className="max-w-lg text-sm">{dt.desc}</p>
                    <ButtonSecondary text={dt.button} />
                  </div>
                </a>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
