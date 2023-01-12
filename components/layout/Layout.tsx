import { useRouter } from "next/router";
import { Main } from "./style/style-Layout";
import type { CompositionType } from "../../types";
import Header from "./Header";

const HIDING_HEADER_ROUTE = ["/404", "/member/login"];

const Layout = (props: CompositionType) => {
  const router = useRouter();

  return (
    <>
      {HIDING_HEADER_ROUTE.includes(router.pathname) ? null : <Header />}
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
