import Head from 'next/head';
import "styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"/>
          <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&amp;family=Raleway:wght@100;400;800&amp;display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}