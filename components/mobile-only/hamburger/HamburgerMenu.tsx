import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { MenuContainer, Backrop } from "./style/style-HamburgerMenu";
import type { PropsType } from "./Hamburger";

const NAV_LINK = [
  { name: "로그인", path: "/auth/signIn", icon: <BiUser /> },
  { name: "FAQ", path: "/help/faq", icon: <BsQuestionCircle /> },
  { name: "Q&A", path: "/help/qna", icon: <RiQuestionAnswerLine /> },
];

const HamburgerMenu = (props: PropsType) => {
  const router = useRouter();

  const handleClickMenu = (path: string) => {
    props.onClickHamburger();
    router.push(path);
  };

  return (
    <>
      {props.isClickedHamburger ? (
        <Backrop onClick={props.onClickHamburger} />
      ) : null}
      <MenuContainer isClicked={props.isClickedHamburger}>
        {NAV_LINK.map((link) => (
          <li key={uuidv4()} onClick={() => handleClickMenu(link.path)}>
            {link.icon}
            <p>{link.name}</p>
          </li>
        ))}
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu;
