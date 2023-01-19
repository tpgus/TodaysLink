import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  //app.tsx는 바디영역의 최상위 root 요소 느낌
  //document는 전체 html 문서를 구성하는 모든 요소를 커스텀할 수 있음
  render() {
    return (
      <Html lang="ko-KR">
        {/* 이곳의 Head는 next/head와 다름 */}
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
          {/* 컴포넌트들에 공통적으로 적용되는 각종 메타 태그 및 웹 폰트 
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
    as="style"/> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://todayslink.net/" />
          <meta
            property="og:title"
            content="[링크 투데이] 다양한 추첨 이벤트 링크 모음"
          />
          <meta property="og:image" content="/images/og_img.jpg" />
          <meta
            property="og:description"
            content="누구나 쉽게 참여할 수 있는 추첨 이벤트 링크 모음"
          />
          <meta property="og:site_name" content="Todays Link" />
          <meta property="og:locale" content="ko-KR" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body>
          <div id="overlay-root" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
