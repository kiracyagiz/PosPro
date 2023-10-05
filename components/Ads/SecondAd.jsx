import section2 from "../../public/section2.png";
import light from "../../public/light.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";


const SecondAd = () => {
  const {t} = useTranslation("common");
  const secondAd= t("SecondAd",{returnObjects:true})
  return (
    <div className="flex flex-col md:flex-row mt-14">
      <div className="w-8/12 hidden lg:block ">
        <Image src={section2}  alt="programme-per-restoran"/>
      </div>
      <div className="w-full  flex  flex-col bg-primaryYellow items-center gap-y-8 text-center">
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="roboto700 text-2xl mt-2 ">{secondAd.header}</h3>
          <p className="roboto700 mt-4">{secondAd.title}</p>
          <div className="items-center">
            <Image src={light} className="w-[30px] " alt="PosAl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondAd;
