import MyEventHistory from "../../components/mypage/MyEventHistory";
import Head from "next/head";
import { authOptions } from "../api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";

const myEvent = () => {
  return (
    <>
      <Head>
        <title>이벤트 참여 기록</title>
        <meta name="description" content="이벤트 참여 기록" />
      </Head>
      <MyEventHistory />
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
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default myEvent;
