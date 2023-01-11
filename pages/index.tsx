import LinkList from "../components/link/LinkList";
import SidebarFilter from "../components/left-sidebar/SidebarFilter";
import TagList from "../components/tags/TagList";

const HomePage = () => {
  return (
    <>
      <TagList />
      <SidebarFilter />
      <LinkList />
    </>
  );
};

export default HomePage;
