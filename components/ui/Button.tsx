import React from "react";
import type { CompositionType } from "../../types";
import { Button as CustomButton } from "./style/style-Button";

interface PropsType extends CompositionType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
}

const Button = (props: PropsType) => {
  return <CustomButton onClick={props.onClick}>{props.children}</CustomButton>;
};

export default Button;
