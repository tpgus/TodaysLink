import * as S from "./style/style-Input";
import { forwardRef } from "react";

interface PropsType {
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
  type: "text" | "password" | "checkbox" | "email";
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  //타입의 순서는 매개 변수의 순서와 반대여야 한다. 아닐시 에러
  return <S.Input ref={ref} {...props} />;
});

Input.displayName = "Input";
export default Input;
