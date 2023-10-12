import Link from "next/link";
import { useEffect, useState } from "react";

import tr from "../../public/turkey.png";
import sq from "../../public/sq.png";
import en from "../../public/en.png";

import Image from "next/image";


const Language = (props) => {
  const { locale, localeEn, param, localeTr } = props;

  const getLanguageInfo = (param) => {
    const languages = {
      sq: {
        current: locale,
        alt: localeEn,
        last: localeTr,
        name: "SQ",
        nameSecond: "EN",
        nameThird: "TR",
        images: {
          current: sq,
          alt: en,
          last: tr,
        },
      },
      en: {
        current: localeEn,
        alt: locale,
        last: localeTr,
        name: "EN",
        nameSecond: "SQ",
        nameThird: "TR",
        images: {
          current: en,
          alt: sq,
          last: tr,
        },
      },
      tr: {
        current: localeTr,
        alt: locale,
        last: localeEn,
        name: "TR",
        nameSecond: "SQ",
        nameThird: "EN",
        images: {
          current: tr,
          alt: sq,
          last: en,
        },
      },
    };
    return languages[param];
  };

  const [languageInfo, setLanguageInfo] = useState(getLanguageInfo(param));

  useEffect(() => {
    setLanguageInfo(getLanguageInfo(param));
  }, [param]);

  return (
    <div className="group z-40">
  
      <div className="bg-primaryYellow flex items-center gap-x-1 lg:group-hover:mt-28 ">
         <div className="w-8 m-2 flex items-center" >
            <Image src={languageInfo.images.current}  alt={languageInfo.current}/>
          </div>
        <p className="text-sm">{languageInfo.name}</p>
      </div>
    <a href={languageInfo.alt}>
      <div className="bg-white  items-center gap-x-1 w-20 hidden  group-hover:flex rounded-t-lg ">
        <div className="w-2 h-2 duration-0  absolute ml-6 mb-12 md:top-4.5 md:hidden lg:flex bg-white rotate-45"></div>
        <div className="w-8 m-2 flex items-center" >
            <Image src={languageInfo.images.alt} alt={languageInfo.alt} />
          </div>
        <p className="text-sm ">{languageInfo.nameSecond} </p>
      </div>

    </a>
    <a href={languageInfo.last}>
      <div className="bg-white  items-center gap-x-1 w-20 hidden  py-2 group-hover:flex rounded-b-lg">
      <div className="w-8 m-2 flex items-center" >
            <Image src={languageInfo.images.last}  alt={languageInfo.alt}/>
          </div>
        <p className="text-sm ">{languageInfo.nameThird}</p>
      </div>
      </a>
  </div>
);
};


export default Language;
