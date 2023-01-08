import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

// _app.tsx는 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 수행한다.
// 즉, 모든 컴포넌트에 공통적으로 적용할 속성들을 관리하기 위한 파일이다.
export default function App({ Component, pageProps }: AppProps) {
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
        <div className="root"></div>
        {/* Portal을 위한 div 태그 */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
