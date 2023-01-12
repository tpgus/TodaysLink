import Head from "next/head";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import Layout from "../components/layout/Layout";

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
          content="무료로 쉽게 참여할 수 있는 각종 응모, 추첨 이벤트 링크 모음"
        />
        <title>투데이 링크</title>
      </Head>
      {/* 포탈 위치 */}
      <div className="root"></div>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* 오버레이를 위한 root 요소 */}
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ThemeProvider>
    </>
  );
}

{
  /* 공식 문서에서는 return getLayout(...) 처럼 쓰지만, 그대로 쓸 경우 중첩 순서가 바뀐다.
        따라서 아래와 같은 꼴이 되어버리기 때문에 전역 스타일에 접근할 수 없다. (theme 등)
        <NestedLayout>
          <ThemeProvider theme={theme}>
            <전역 레이아웃>
              <Component {...pageProps} />
            </전역 레이아웃>
          </ThemeProvider>
        </NestedLayout> 
         */
}
