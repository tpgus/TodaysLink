import Head from "next/head";
import AppLayout from "../components/layout/AppLayout";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { theme } from "../styles/theme";
import { store } from "../store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
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
  const [isRouterChanging, setIsRouterChanging] = useState(false);
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  useEffect(() => {
    const handleRouterChangeStart = () => {
      setIsRouterChanging(true);
    };

    const handleRouterChangeStop = () => {
      setIsRouterChanging(false);
    };

    router.events.on("routeChangeStart", handleRouterChangeStart);
    router.events.on("routeChangeComplete", handleRouterChangeStop);

    return () => {
      router.events.off("routeChangeStart", handleRouterChangeStart);
      router.events.off("routeChangeComplete", handleRouterChangeStop);
    };
  });

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
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
          </SessionProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

// {
/* <SessionProvider session={pageProps.session}>
{isRouterChanging ? (
  <LoadingSpinner />
) : (
  <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
)}
</SessionProvider> */
// }
