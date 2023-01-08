import React, { useEffect, useRef } from "react";
import { BiUser } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { MenuContainer, Backrop } from "./style/style-HamburgerMenu";

interface PropsType {
  isClicked: boolean;
}

let deviceHeight = 0;
const HamburgerMenu = (props: PropsType) => {
  useEffect(() => {
    deviceHeight = window.innerHeight;
    console.log(deviceHeight);
  });

  return (
    <>
      {props.isClicked ? <Backrop /> : null}
      <MenuContainer isClicked={props.isClicked} screenHeight={deviceHeight}>
        <li>
          <BiUser />
          <p>로그인</p>
        </li>
        <li>
          <BsQuestionCircle />
          <p>Q&A</p>
        </li>
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu;
