import React from 'react'
import Header from '../../components/Header/Header'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BlogBox from '../../components/Blog/BlogBox';
import PriceBox from '../../components/Price/PriceBox';
const Dependency = () => {
    const { t, i18n } = useTranslation("common");
    const header = t("HeaderNav", { returnObjects: true });
    const headerB = t("Header", { returnObjects: true });
    const currentLocale = i18n.language;
    const moduleData = t("common:Dependency", { returnObjects: true });

  return (
    <div>
      
      <Header
        header={header}
        headerB={headerB}
        locale={currentLocale}
        href={"/"}
        isMain={false}
      />
         <div className="h-fit p-8 pt-16" >

        <div className="flex flex-col lg:flex lg:flex-row  justify-between lg:mx-24  md:gap-x-4  gap-y-12 ">
          {moduleData.map((dt, i) => (
            <PriceBox key={i} dt={dt} isModule={true} locate={dt.locate} secondOption={true}/>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


export default Dependency