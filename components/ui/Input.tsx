import React, { forwardRef, useImperativeHandle } from "react";
import * as S from "./style/style-Input";

interface PropsType {
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
  type: "text" | "password" | "checkbox" | "email";
}

const Input = React.forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  //타입의 순서는 매개 변수의 순서와 반대여야 한다. 아닐시 에러
  return <S.Input ref={ref} {...props} />;
});

Input.displayName = "Input";
export default Input;
