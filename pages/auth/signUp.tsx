import Head from "next/head";
import SignUp from "../../components/auth/SignUp";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";

const SignUpPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 회원가입</title>
        <meta name="description" content="투데이 링크 회원가입" />
      </Head>
      <SignUp />
    </>
  );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default SignUpPage;
