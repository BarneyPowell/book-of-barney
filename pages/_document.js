import Document, { Head, Main, NextScript, Html } from "next/document";
import GTag from '@/molecules/GTag';
import getSiteMetadata from "../utils/helpers/getSiteMetadata";

export default class MyDocument extends Document {
  render() {

    const siteMetadata = getSiteMetadata();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <GTag gaTrackingId='UA-3453155-3' />
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}