import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/Header/Header";
import FiskalizimiPage from "../components/BlogPage/FiskalizimiPage";
import Footer from "../components/Footer/Footer";

const Fiskalizimi = () => {
    const { t, i18n } = useTranslation("common");
    const header = t("HeaderNav", { returnObjects: true });
    const headerB = t("Header", { returnObjects: true });
    const currentLocale = i18n.language;
    const fiskalizimiData = t("Fiskalizimi",{returnObjects: true})
    const blogData = t("common:Blog", { returnObjects: true });

  return (
    <div>
        <Header
        header={header}
        navButton={headerB.button}
        locale={currentLocale}
        href={'/fiskalizimi'}
      />
      <FiskalizimiPage fiskalizimiData={fiskalizimiData} blogData={blogData}/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "Faq"])),
      },
    };
  }

export default Fiskalizimi
