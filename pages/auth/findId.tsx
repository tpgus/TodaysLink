import Head from "next/head";
import FindId from "../../components/auth/FindId";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";

const findIdPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 아이디 찾기</title>
        <meta name="description" content="투데이 링크 아이디 찾기" />
      </Head>
      <FindId />
    </>
  );
};

findIdPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default findIdPage;
