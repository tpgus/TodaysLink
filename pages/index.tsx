import LinkList from "../components/link/LinkList";
import SidebarFilter from "../components/left-sidebar/SidebarFilter";
import TagList from "../components/tags/TagList";
import Head from "next/head";

const HomePage = () => {
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
      <LinkList />
    </>
  );
};

export default HomePage;
