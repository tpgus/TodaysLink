import React from "react";
import { HamburgerContainer } from "./style/style-Hamburger";

interface PropsType {
  isClicked: boolean;
  clickHandler: React.MouseEventHandler<HTMLDivElement>;
}

const HamburgerUI = (props: PropsType) => {
  return (
    <>
      <HamburgerContainer
        isClicked={props.isClicked}
        onClick={props.clickHandler}
      >
        {/* 햄버거 라인 3개 : 빈 div 요소 3개*/}
        <div></div>
        <div></div>
        <div></div>
      </HamburgerContainer>
    </>
  );
};

export default HamburgerUI;
