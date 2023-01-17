import React from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { IoMdArrowDropright } from "react-icons/io";
import * as S from "./style/style-HelpPageLayout";

interface PropsType {
  children: React.ReactNode;
}

const MENU_LIST = [
  { name: "자주 묻는 질문", path: "/help/faq" },
  { name: "1:1 문의 (Q&A)", path: "/help/qna" },
];

const HelpPageLayout = (props: PropsType) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const isSamePath = (pathname: string) => {
    return currentPath === pathname;
  };

  return (
    <S.LayoutContainer>
      <S.SideMenuContainer className="pc-tablet-only">
        <S.SideMenu>
          <h2>메뉴</h2>
          <ul>
            {MENU_LIST.map((menu) => (
              <li
                key={uuidv4()}
                onClick={() => router.push(`${menu.path}`)}
                className={isSamePath(menu.path) ? "activated" : ""}
              >
                {menu.name}
                {isSamePath(menu.path) ? (
                  <IoMdArrowDropright size={20} />
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
