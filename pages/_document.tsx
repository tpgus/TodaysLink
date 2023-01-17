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

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
          {/* 컴포넌트들에 공통적으로 적용되는 각종 메타 태그 및 웹 폰트 
          <meta name="keywords" content="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="style"
            <meta property="og:type" content="website"> 
            <meta property="og:title" content="페이지 제목">
            <meta property="og:description" content="페이지 설명">
            <meta property="og:image" content="http://www.mysite.com/myimage.jpg">
            <meta property="og:url" content="http://www.mysite.com">
            오픈 그래프 태그는 사이트가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보입니다. 사이트의 제목, 설명과 더불어서 사이트를 대표하는 이미지도 같이 넣어주세요. 자세한 내용은 http://ogp.me를 참고하세요.
          />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
