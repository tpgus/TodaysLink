import React from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import type { CompositionType as PropsType } from "../../types";
import { IoMdArrowDropright } from "react-icons/io";
import {
  LayoutContainer,
  SideMenuContainer,
  AdBanner,
  Main,
  SideMenu,
} from "./style/style-HelpPageLayout";

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
    <LayoutContainer>
      <SideMenuContainer className="pc-tablet-only">
        <SideMenu>
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
        </SideMenu>
      </SideMenuContainer>
      <Main>{props.children}</Main>
      {/* <AdBanner>광고 영역</AdBanner> */}
    </LayoutContainer>
  );
};

export default HelpPageLayout;
