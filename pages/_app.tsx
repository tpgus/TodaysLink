import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import Head from "next/head";
import AppLayout from "../components/layout/AppLayout";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="누구나 쉽게 무료로 참여할 수 있는 각종 이벤트, 응모 링크 모음"
        />

        <title>투데이 링크</title>
      </Head>
      {/* 포탈 위치 */}
      <div className="root"></div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </ThemeProvider>
    </>
  );
}
