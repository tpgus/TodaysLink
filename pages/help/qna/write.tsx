import QnAWriting from "../../../components/help/QnAWriting";
import Head from "next/head";

const QnAWritingPage = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 1:1 문의</title>
        <meta
          name="description"
          content="사이트 이용과 관련하여 궁금한 내용을 문의하실 수 있습니다"
        />
      </Head>
      <QnAWriting />
    </>
  );
};

export default QnAWritingPage;
