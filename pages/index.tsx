import LinkList from "../components/link/LinkList";
import SidebarFilter from "../components/left-sidebar/SidebarFilter";
import TagList from "../components/tags/TagList";
import Head from "next/head";
import { buildFilePath, readFileData } from "../api-helper";
import { GetStaticProps } from "next";
import type { LinkListType } from "../types/commonType";

interface PropsType {
  linkList: LinkListType;
}

const HomePage = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>투데이 링크</title>
        <meta
          name="description"
          content="누구나 쉽게 참여할 수 있는 다양한 추첨 이벤트 링크를 제공합니다. 다양한 이벤트에 참여하여 행운을 누려보세요!"
        />
      </Head>
      <TagList />
      <SidebarFilter />
      <LinkList linkList={props.linkList} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //현재는 파일로 읽지만 나중에 데이터베이스로 코드 변경
  //api 호출은 클라이언트 사이드에서 하는 것임. 여기는 그냥 서버사이드 코드 바로 사용
  const filePath = buildFilePath("dummy-data.json");
  const linkList = await readFileData<LinkListType>(filePath);

  return {
    props: {
      linkList,
    },
    revalidate: 1800,
  };
};

export default HomePage;
