import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { HeaderResponsive } from "@/components/header";
import { FooterLinks } from "@/components/footer";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

const links = [
  {
    link: "/",
    label: "서비스 소개",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
];

const footerLinks = [
  {
    title: "About",
    links: [
      {
        label: "서비스 소개",
        link: "/",
      },
      {
        label: "결제하기",
        link: "/pay",
      },
      {
        label: "Pricing",
        link: "/pricing",
      },
      {
        label: "고객센터",
        link: "/service",
      },
    ],
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YDM6TNMLS9"
      />
      <Script
        id="GA"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){
    dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YDM6TNMLS9');
`,
        }}
      />
      ;
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: "30em",
            sm: "48em",
            lg: "74em",
            xl: "90em",
            md: "68em",
          },
          colors: {
            ddColorMain: [
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
              "rgba(242, 29, 118, 1)",
            ],
            ddColorBackground: [
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
              "rgba(242, 29, 118, 0.15)",
            ],
          },
        }}
      >
        <HeaderResponsive links={links} />
        <Component {...pageProps} />
        <FooterLinks data={footerLinks} />
      </MantineProvider>
    </>
  );
}
