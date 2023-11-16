import section3 from "../../public/section3.png";
import light from "../../public/light.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";


const SecondAd = () => {
  const {t} = useTranslation("common");
  const thirdAd= t("ThirdAd",{returnObjects:true})
  return (
    <div className="flex flex-col md:flex-row mt-14  ">
      <div className="w-8/12 hidden lg:block ">
        <Image src={section3} className=" h-40 object-cover"  alt="programme-per-restoran"/>
      </div>
      <div className="w-full  flex  flex-col bg-primaryYellow lg:py-0 py-3 items-center gap-y-8 text-center">
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="roboto700 text-2xl mt-2 ">{thirdAd.header}</h3>
          <p className="roboto700 text-xl mt-4">{thirdAd.title}</p>
          <div className="items-center mt-4">
            <Image src={light} className="w-[30px] " alt="PosAl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondAd;
