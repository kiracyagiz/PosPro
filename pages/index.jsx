"use client"

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Price from "../components/Price/Price";
import Features from "../components/Features/Features";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BackToTopButton from "../components/General/BackToTopButton";
import PosModule from "../components/PosModules/PosModule";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useState,useEffect } from "react";
import Popup from "../components/Popup/Popup";
import { useRouter } from "next/router";
const Home = () => {
  const { t, i18n } = useTranslation("common");
  const currentLocale = i18n.language;

  const header = t("common:HeaderNav", { returnObjects: true });
  const headerB = t("Header", { returnObjects: true });
  const [showPopup, setShowPopup] = useState(false);
  const popupData = t("Popup", { returnObjects: true });
  const router = useRouter();


  useEffect(() => {

    if(!router.query.params && !router.query.params == ''){
      router.push('/404')
    }

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(popupTimer);
  }, [router]); 


  return (
    <div className="bg-gray-100">
 
      <Header
        header={header}
        headerB={headerB}
        locale={currentLocale}
        href={"/"}
        isMain={false}
      />
      <Hero />
      <Price />
      <Features />
      <PosModule/>
      <About />
      <Blog />
      <Contact />
      <Footer />
      <BackToTopButton/>
      {showPopup && <Popup setShowPopup={setShowPopup} popupData={popupData} />}

      <div >
            <TawkMessengerReact
                propertyId="644403d74247f20fefed28f8"
                widgetId="1gukqu0l3"/>
        </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
