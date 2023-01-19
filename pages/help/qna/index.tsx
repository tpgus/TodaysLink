import HelpPageLayout from "../../../components/help/HelpPageLayout";
import QNAList from "../../../components/help/QnAList";
import Head from "next/head";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../../pages/_app";

const QnAPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - Q&A (1:1 문의)</title>
        <meta
          name="description"
          content="사이트 이용과 관련하여 궁금한 내용을 문의하실 수 있습니다"
        />
      </Head>
      <QNAList />
    </>
  );
};

QnAPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default QnAPage;
