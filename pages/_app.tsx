import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { HeaderResponsive } from "@/components/header";
import { FooterLinks } from "@/components/footer";

const links = [
  {
    link: "/",
    label: "서비스 소개",
  },
  {
    link: "/pricing/abc",
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
  return (
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
  );
}
