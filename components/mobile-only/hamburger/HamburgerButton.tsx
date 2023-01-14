import React from "react";
import { HamburgerContainer } from "./style/style-Hamburger";
import type { PropsType } from "./Hamburger";

const HamburgerButton = (props: PropsType) => {
  return (
    <>
      <HamburgerContainer
        isClicked={props.isClickedHamburger}
        onClick={props.onClickHamburger}
      >
        {/* 햄버거 디자인 : 라인 3개를 나타내기 위한 빈 div 요소들*/}
        <div></div>
        <div></div>
        <div></div>
      </HamburgerContainer>
    </>
  );
};

export default HamburgerButton;
