import React from "react";
import * as S from "./style/style-FindPassword";
import Input from "../ui/Input";
import Button from "../ui/Button";

const FindPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <S.FindPasswordLayout>
      <h2>비밀번호 찾기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <Input type="text" />
        </div>
        <div>
          <label>가입시 등록한 이메일</label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <Button type="submit">비밀번호 찾기</Button>
      </form>
    </S.FindPasswordLayout>
  );
};

export default FindPassword;
