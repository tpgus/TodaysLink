import * as S from "./style/style-HelpPageLayout";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { IoMdArrowDropright } from "react-icons/io";

interface PropsType {
  children: React.ReactNode;
}

const MENU_LIST = [
  { name: "자주 묻는 질문", path: "/help/faq" },
  { name: "문의 게시판 (Q&A)", path: "/help/qna" },
];

const HelpPageLayout = (props: PropsType) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const isSamePath = (pathname: string) => {
    return currentPath.includes(pathname);
  };

  return (
    <S.LayoutContainer>
      <S.SideMenuContainer className="pc-tablet-only">
        <S.SideMenu>
          <h2>메뉴</h2>
          <ul>
            {MENU_LIST.map((menu) => (
              <li key={uuidv4()}>
                <Link href={menu.path}>{menu.name}</Link>
                {isSamePath(menu.path) ? (
                  <IoMdArrowDropright size={20} className="icon" />
                ) : null}
              </li>
            ))}
          </ul>
        </S.SideMenu>
      </S.SideMenuContainer>
      <S.Main>{props.children}</S.Main>
      {/* <AdBanner>광고 영역</AdBanner> */}
    </S.LayoutContainer>
  );
};

export default HelpPageLayout;
