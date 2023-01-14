import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import * as S from "./style/style-Login";

const Login = () => {
  const hanldeSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.LoginLayout>
      <h2>로그인</h2>
      <S.LoginContainer>
        <S.LoginForm onSubmit={hanldeSumbit}>
          <div>
            <label htmlFor="id">아이디</label>
            <input id="id" type="text" name="id" />
          </div>
          <div className="form--password">
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" name="password" />
          </div>
          <Button onClick={() => alert("클릭")}>로그인</Button>
        </S.LoginForm>
        <S.UtilBox>
          <div>
            <input id="keep-login" type="checkbox" />
            <label htmlFor="keep-login">로그인 유지</label>
          </div>
          <nav>
            <Link className="nav__link--id" href="/auth/findId">
              아이디 찾기
            </Link>
            <Link href="/auth/findPassword">비밀번호 찾기</Link>
          </nav>
        </S.UtilBox>
        <S.SignUpButton>
          <Link href="/auth/signUp">회원가입</Link>
        </S.SignUpButton>
      </S.LoginContainer>
    </S.LoginLayout>
  );
};

export default Login;
