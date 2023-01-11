import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { MenuContainer, Backrop } from "./style/style-HamburgerMenu";
import type { PropsType } from "./Hamburger";

const MENU = [
  { name: "로그인", path: "/", icon: <BiUser /> },
  { name: "FAQ", path: "/help/faq", icon: <BsQuestionCircle /> },
];

const HamburgerMenu = (props: PropsType) => {
  const router = useRouter();

  const clickMenuHandler = (path: string) => {
    props.clickHamburgerHandler();
    router.push(path);
  };

  return (
    <>
      {props.isClickedHamburger ? (
        <Backrop onClick={props.clickHamburgerHandler} />
      ) : null}
      <MenuContainer isClicked={props.isClickedHamburger}>
        {MENU.map((menu) => (
          <li key={uuidv4()} onClick={() => clickMenuHandler(menu.path)}>
            {menu.icon}
            <p>{menu.name}</p>
          </li>
        ))}
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu;
