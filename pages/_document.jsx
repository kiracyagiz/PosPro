import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Jemi një kompani teknologjike që specializohet në programe për lokale dhe menaxhimin e porosive, me fokus te inovacioni dhe kënaqësia e klientit."
          />{" "}
            <link rel="icon" type="image/x-icon" href="/favicon.ico.png"/>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GTM-WZ44XMQ7"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'GTM-WZ44XMQ7');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
