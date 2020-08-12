import Document, { Head, Main, NextScript, Html } from "next/document";

import getSiteMetadata from "../utils/helpers/getSiteMetadata";

export default class MyDocument extends Document {
  render() {

    const siteMetadata = getSiteMetadata();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}