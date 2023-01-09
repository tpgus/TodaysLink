import React from "react";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";

export interface PropsType {
  isClickedHamburger: boolean;
  clickHamburgerHandler: () => void;
}

const Hamburger = (props: PropsType) => {
  return (
    <>
      <HamburgerButton {...props} />
      <HamburgerMenu {...props} />
    </>
  );
};

export default Hamburger;
