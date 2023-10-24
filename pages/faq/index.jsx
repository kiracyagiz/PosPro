import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../../components/Header/Header";
import FaqPage from "../../components/Faq/FaqPage";

const Faq = () => {
    const { t, i18n } = useTranslation("common");
    const header = t("HeaderNav", { returnObjects: true });
    const headerB = t("Header", { returnObjects: true });
    const currentLocale = i18n.language;
    const faqData = t("Faq",{returnObjects: true})
  return (
    <div>
      <Header
        header={header}
        navButton={headerB.button}
        locale={currentLocale}
        href={'/faq'}
        isMain={false}

      />
        <FaqPage faqData={faqData}/>
        
    </div>
  )
}

export async function getStaticProps({ locale }) {
  // console.log(locale)
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "Faq"])),
      },
    };
  }

export default Faq