import ButtonPrimary from "../components/General/ButtonPrimary"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


const Error = () => {
  const { t, i18n } = useTranslation("common");
  const error = t("Error", { returnObjects: true });
  return (
    <div className='text-center justify-center items-center flex flex-col gap-y-10 p-20'>
    <img src='/notfound.png' alt='Not Found' width='200' height='200'/>
    <p className='text-3xl'>{error.header}.</p>
    <p className='text-xl'>{error.desc}</p>
    <ButtonPrimary text={error.button} locate={'/'}/>
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

export default Error