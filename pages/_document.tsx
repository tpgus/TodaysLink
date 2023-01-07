import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

//맨아래 주석 설명 확인
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

// _app.tsx 파일은 프로젝트를 생성하면 자동으로 만들어지는데 _document.tsx 파일은 그렇지 않다.
// _document.tsx는 _app.tsx 다음에 실행된다.

// 페이지에 공통적으로 활용할 <head>(메타 태그, 웹 폰트 등)나 <body> 태그 안에 들어갈 내용들을 커스텀할때 활용한다.
//  _document.tsx 는 오직 서버에서만 실행된다.
// 그래서 두 파일의 주요한 특징을 나눠보면 _app.tsx는 로직, 전역 스타일 등 컴포넌트에 공통적으로 사용할 데이터를 다룬다.

// _document.tsx는 공통적으로 적용할 HTML을 마크업한다.
// styled-components를 통해 페이지를 만들다 보면 페이지를 불러올 때 HTML 만 가져오고,
// 스타일이 적용되어있지 않다. 위 코드를 추가해줘야만 서버 사이드 렌더링 시 styled-components가 헤더에 주입된다.
// 즉 서버에서 미리 HTML을 마크업할 때 스타일까지 HTML 요소에 적용하는 것이다.

// 이를 _document.tsx가 수행한다.
