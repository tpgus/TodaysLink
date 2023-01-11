import Header from "./Header";
import { Main } from "./style/style-Layout";
import type { CompositionType } from "../../types";

const Layout = (props: CompositionType) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
