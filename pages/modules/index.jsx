import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PosCards from "../../components/PosModules/PosCards";
import Header from "../../components/Header/Header";
import BackToTopButton from "../../components/General/BackToTopButton";
import Footer from "../../components/Footer/Footer";
import PosPageCards from "../../components/PosModules/PosPageCards";

const Module = () => {
  const { t, i18n } = useTranslation("common");
  const header = t("HeaderNav", { returnObjects: true });
  const headerB = t("Header", { returnObjects: true });
  const currentLocale = i18n.language;
  const moduleData = t("PosModules", { returnObjects: true });
  return (
 <div className="bg-gray-100">
        <Header
        header={header}
        headerB={headerB}
        locale={currentLocale}
        href={''}
        isMain={false}

      />
      <div>
        <p className="roboto900 my-10 text-center">MODULES</p>
      </div>
     <div className=" flex flex-col  lg:flex-row flex-wrap   gap-x-8 p-8 mx-auto justify-center mt-10">
      {moduleData.map((dt,i)=> (
        <div key={i}>
          <PosCards dt={dt}/>
        </div>
      ))}
  </div>
  <Footer/>
  <BackToTopButton/>
 </div>
  )
}

export async function getStaticProps({ locale }) {

  return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "PosModules"])),
      },
    };
  }


export default Module