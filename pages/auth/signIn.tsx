import AuthPageLayout from "../../components/auth/AuthPageLayout";
import Login from "../../components/auth/Login";
import Head from "next/head";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 로그인</title>
        <meta name="description" content="투데이 링크 로그인" />
      </Head>
      <Login />
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default LoginPage;
