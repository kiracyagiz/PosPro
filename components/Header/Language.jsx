import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


import Image from "next/image";

const Language = (props) => {
  const { locale, localeEn, param, localeTr } = props;
  const router = useRouter();

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
          current: '/sq.png',
          alt: '/en.png',
          last: '/turkey.png',
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
          current: '/en.png',
          alt: '/sq.png',
          last: '/turkey.png',
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
          current: '/turkey.png',
          alt: '/sq.png',
          last: '/en.png',
        },
      },
    };
    return languages[param];
  };

  const [languageInfo, setLanguageInfo] = useState(getLanguageInfo(param));

  useEffect(() => {
    setLanguageInfo(getLanguageInfo(param));
  }, []);


  const handler = (locale) => {

     router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, { locale: false })
  }


  return (
    <div className="group z-40 cursor-pointer">
      <div className="bg-primaryYellow flex items-center gap-x-1 lg:group-hover:mt-28 ">
        <div className="w-8 m-3 flex items-center">
          <Image src={languageInfo.images.current} alt={languageInfo.current} height={50} width={50}  />
        </div>
        <p className="text-sm">{languageInfo.name}</p>
      </div>

      <div onClick={() => handler(languageInfo.alt)} className=" cursor-pointer">
        <div className="bg-white  items-center gap-x-1 w-20 hidden  group-hover:flex rounded-t-lg " >
          <div className="w-2 h-2 duration-0 mt-1  absolute ml-6 mb-12 md:top-4.5 md:hidden lg:flex bg-white rotate-45"></div>
          <div className="w-8 m-2 flex items-center">
            <Image src={languageInfo.images.alt} alt={languageInfo.alt} height={50} width={50}  />
          </div>
          <p className="text-sm ">{languageInfo.nameSecond} </p>
        </div>
      </div>

      <div onClick={()=> handler(languageInfo.last)} className="cursor-pointer" >
        <div className="bg-white  items-center gap-x-1 w-20 hidden  py-2 group-hover:flex rounded-b-lg">
          <div className="w-8 m-2 flex items-center">
            <Image src={languageInfo.images.last} alt={languageInfo.last}  height={50} width={50} />
          </div>
          <p className="text-sm ">{languageInfo.nameThird}</p>
        </div>
      </div>
    </div>
  );
};

export default Language;
