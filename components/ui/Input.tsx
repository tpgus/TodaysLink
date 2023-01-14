import React from "react";
import * as S from "./style/style-Input";

interface PropsType {
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
  type: "text" | "password" | "checkbox" | "email";
}

const Input = (props: PropsType) => {
  return <S.Input {...props} />;
};

export default Input;
