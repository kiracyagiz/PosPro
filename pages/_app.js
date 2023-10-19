import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Pos Al</title>
      </Head>
    </>
  );
}

export default appWithTranslation(MyApp);
