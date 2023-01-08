import Header from "./Header";
import { Main } from "./style/style-Layout";

interface PropsType {
  children: React.ReactNode;
}

const Layout = (props: PropsType) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
