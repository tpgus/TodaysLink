import Head from "next/head";
import SignIn from "../../components/auth/SignIn";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { NextPageWithLayout } from "../../pages/_app";
import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 로그인</title>
        <meta name="description" content="투데이 링크 로그인" />
      </Head>
      <SignIn />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  //이미 로그인된 경우 리다이렉트
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default LoginPage;
