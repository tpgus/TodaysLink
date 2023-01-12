import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import type { CompositionType } from "../../types";
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

const HelpPageLayout = (props: CompositionType) => {
  const router = useRouter();

  return (
    <LayoutContainer>
      <SideMenuContainer>
        <SideMenu>
          <h2>메뉴</h2>
          <ul>
            {MENU_LIST.map((menu) => (
              <li key={uuidv4()} onClick={() => router.push(`${menu.path}`)}>
                {menu.name}
              </li>
            ))}
          </ul>
        </SideMenu>
      </SideMenuContainer>
      <Main>{props.children}</Main>
      <AdBanner />
    </LayoutContainer>
  );
};

export default HelpPageLayout;
