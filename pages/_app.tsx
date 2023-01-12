import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
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

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* 오버레이를 위한 root 요소 */}
        <div className="root"></div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
