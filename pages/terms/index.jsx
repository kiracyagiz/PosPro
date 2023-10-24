import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TermsPage from "../../components/Terms/TermsPage";
import BackToTopButton from "../../components/General/BackToTopButton";
const Terms = () => {
  const { t, i18n } = useTranslation("common");
  const header = t("HeaderNav", { returnObjects: true });
  const headerB = t("Header", { returnObjects: true });
  const currentLocale = i18n.language;
  const termsData = t("Terms", { returnObjects: true });
  return (
    <div>
      <Header
        header={header}
        navButton={headerB.button}
        locale={currentLocale}
        href={""}
        isMain={false}
      />
      <TermsPage termsData={termsData}/>
      <Footer />
      <BackToTopButton/>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "Terms"])),
    },
  };
}
export default Terms;
