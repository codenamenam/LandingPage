import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

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
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
