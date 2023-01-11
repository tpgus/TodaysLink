import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const NotFoundPage = <Component {...pageProps} />; //404페이지는 레이아웃이 감싸지 않는 형태 = 레이아웃 적용 X

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="무료로 쉽게 참여할 수 있는 각종 래플, 추첨 이벤트 링크 모음"
        />
        <title>투데이 링크</title>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* 오버레이를 위한 root 요소 */}
        <div className="root"></div>
        {router.pathname === "/404" ? (
          NotFoundPage
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
}
