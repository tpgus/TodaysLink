import Head from "next/head";
import ChangePassword from "../../components/mypage/ChangePassword";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { GetServerSideProps } from "next";

const changePasswordPage = () => {
  return (
    <>
      <Head>
        <title>비밀번호 변경</title>
        <meta name="description" content="비밀번호 변경" />
      </Head>
      <ChangePassword />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signIn",
        permanent: false,
        //permanent 대신 상태코드 statusCode 옵션을 이용할 수 있음.
        //즉 permanent는 상태 코드를 결정하는 옵션이라고 봐도되고
        //permanent : true: 308 : 영구 리다이렉트
        //permanent : false : 307 -> 임시 리다이렉트 -> 사용자가 로그인 하지 않았기 때문에
        //일시적으로 로그인으로 리다이렉트 함 (로그인 되었다면 리다이렉트 x)
        //permanent : true 해당 라우트는 서비스 되지 않는 라우트(페이지)이므로 앞으로도 쭈욱~ 리다이렉트 한다
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default changePasswordPage;
