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
const Home = () => {
  const { t, i18n } = useTranslation("common");
  const currentLocale = i18n.language;

  const header = t("common:HeaderNav", { returnObjects: true });
  const headerB = t("Header", { returnObjects: true });


  return (
    <div className="bg-gray-100">
 
      <Header
        header={header}
        headerB={headerB}
        locale={currentLocale}
        href={"/"}
        isMain={true}
      />
      <Hero />
      <Price />
      <Features />
      <About />
      <Blog />
      <Contact />
      <Footer />
      <BackToTopButton/>
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
