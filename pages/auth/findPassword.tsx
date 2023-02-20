import Head from "next/head";
import FindPassword from "../../components/auth/FindPassword";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";

const findPasswordPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 비밀번호 찾기</title>
        <meta name="description" content="투데이 링크 비밀번호 찾기" />
      </Head>
      <FindPassword />
    </>
  );
};

findPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default findPasswordPage;
