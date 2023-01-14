import { useRouter } from "next/router";
import Header from "./Header";
import * as S from "./style/style-Layout";
import type { CompositionType as LayoutPropsType } from "../../types";

const HEADER_HIDING_ROUTES = ["/404", "/auth"];

const AppLayout = (props: LayoutPropsType) => {
  const router = useRouter();
  const showHeader = !HEADER_HIDING_ROUTES.find((route) =>
    router.pathname.includes(route)
  );

  return (
    <>
      {showHeader ? <Header /> : null}
      <S.Main>{props.children}</S.Main>
    </>
  );
};

export default AppLayout;
