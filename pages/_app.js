import Head from 'next/head';
import "styles/global.css";

export function reportWebVitals({ id, name, label, value }) {
  window.gtag('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"/>
          <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&amp;family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400&amp;display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}