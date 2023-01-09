import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

// _app.tsx는 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 수행한다.
// 즉, 모든 컴포넌트에 공통적으로 적용할 속성들을 관리하기 위한 파일이다.

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
        {/* createPortal을 위한 root 요소 */}
        <div className="root"></div>
        {router.pathname === "/404" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
}
