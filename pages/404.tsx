import Head from "next/head";
import NotFound from "../components/common/NotFound-404";
import type { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 404</title>
        <meta
          name="description"
          content="요청하신 페이지를 찾을 수 없습니다. 올바른 경로를 입력해 주세요"
        />
      </Head>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
