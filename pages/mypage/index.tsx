import Head from "next/head";
import MyPageMenu from "../../components/mypage/MyPageMenu";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

/* 
useSession VS getSession ?
useSession => 즉시 세션과 상태를 가져옴 
로그아웃해서 세션이 없다면 세션, 상태는 변경되지 않음 (그대로)
즉, 최신의 상태는 아닐 수 있다.

getSession은 새 요청을 보내 최근의 세션 데이터를 가져옴
세션의 유무 상태를 가져옴 -> 그리고 그것을 로컬 상태로 관리   
*/

const MyPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //서버사이드 함수로부터 받아오는 데이터를 이런식으로 타입 지정해줄 수 있다.
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
  //아직 세션은 쓰이지 않고 있는 상태 -> 추후 코드 변경

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
  //getSession에 비해 속도가 빠르다
  //공식문서 https://next-auth.js.org/configuration/nextjs#in-getserversideprops

  if (!session) {
    return {
      redirect: {
        destination: "/",
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
