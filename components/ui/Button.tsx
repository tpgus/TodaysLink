import React from "react";
import type { CompositionType } from "../../types";
import * as S from "./style/style-Button";

interface PropsType extends CompositionType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  bg?: string;
  type?: "submit";
}

const Button = (props: PropsType) => {
  return (
    <S.Button
      className={props.className}
      onClick={props.onClick}
      bg={props.bg}
      type={props.type}
    >
      {props.children}
    </S.Button>
  );
};

export default Button;
