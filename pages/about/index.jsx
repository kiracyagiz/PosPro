import AboutPage from "../../components/AboutPage/AboutPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const { t, i18n } = useTranslation("common");
  const header = t("HeaderNav", { returnObjects: true });
  const headerB = t("Header", { returnObjects: true });
  const currentLocale = i18n.language;
  const about = t("AboutPage",{returnObjects: true})

  return (
    <div className=" bg-gray-100 flex flex-col justify-between h-fit">
      <Header
        header={header}
        headerB={headerB}
        locale={currentLocale}
        href={''}
        isMain={false}
      />
      <AboutPage about={about} />
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "AboutPage"])),
    },
  };
}

export default About;
