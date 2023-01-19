import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import AppLayout from "../components/layout/AppLayout";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>투데이 링크</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="누구나 쉽게 참여할 수 있는 다양한 추첨 이벤트 링크를 제공합니다."
        />
      </Head>
      <Analytics />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </ThemeProvider>
    </>
  );
}
