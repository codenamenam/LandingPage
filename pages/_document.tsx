import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>
      <body style={{ margin: "0px" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
