import * as S from "./style/style-AppLayout";
import Header from "./Header";
import { useRouter } from "next/router";

interface PropsType {
  children: React.ReactNode;
}

const HEADER_HIDING_ROUTES = ["/404", "/auth"];

const AppLayout = (props: PropsType) => {
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
