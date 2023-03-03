import Head from "next/head";
import MyPageMenu from "../../components/mypage/MyPageMenu";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

const MyPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //서버사이드 함수로부터 받아오는 데이터를 이런식으로 타입 지정해줄 수 있다.
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
  // 아직 세션은 쓰이지 않고 있는 상태 -> 추후 코드 변경

  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지" />
      </Head>
      <MyPageMenu />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  //서버사이드에서 세션을 얻는 방법으로 getSession 보다 getServerSession을 추천한다 from 공식문서
  //getSession에 비해 속도가 빠르다(세션을 얻기 위한 추가적인 네트워크 요청을 수행하지 않는다),
  //공식문서 https://next-auth.js.org/configuration/nextjs#in-getserversideprops

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
        //permanent : true 해당 라우트는 서비스 되지 않는 라우트이므로 쭈욱~ 리다이렉트
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default MyPage;
