import React from "react";
import * as S from "./style/style-Button";

interface PropsType {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  bg?: string;
  type?: "submit";
  disable?: boolean;
}

const Button = (props: PropsType) => {
  return (
    <S.Button
      className={props.className}
      onClick={props.onClick}
      bg={props.bg}
      type={props.type}
      disabled={props.disable}
    >
      {props.children}
    </S.Button>
  );
};

export default Button;
