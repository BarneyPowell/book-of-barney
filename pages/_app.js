import Head from 'next/head';
import "styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"/>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&amp;family=Patua+One&amp;display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}