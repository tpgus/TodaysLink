import * as S from "./style/style-SignIn";
import Link from "next/link";
import Button from "../ui/Button";
import Notification from "../common/Notification";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { showNotification } from "../../store/notificationSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const SignIn = () => {
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  //유효성 검사는 서버 API에서도 수행해야 한다.
  const hanldeSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredId = userIdRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    //기본 유효성 검사
    if (enteredId.trim().length === 0 || enteredPassword.trim().length === 0) {
      dispatch(
        showNotification({
          isPositive: false,
          message: "모든 정보를 입력해 주세요",
        })
      );
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      userId: enteredId,
      password: enteredPassword,
    });

    if (result && result.error) {
      //실패
      dispatch(
        showNotification({
          isPositive: false,
          message: result.error,
        })
      );
      return;
    }

    //성공 -> 상태 관리 로직
    router.replace("/");
  };

  return (
    <S.LoginLayout>
      {notificationState.isActive ? <Notification /> : null}
      <h2>로그인</h2>
      <S.LoginContainer>
        <S.LoginForm onSubmit={hanldeSumbit}>
          <div>
            <label htmlFor="id">아이디</label>
            <input id="id" type="text" name="id" ref={userIdRef} />
          </div>
          <div className="password-wrap">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              name="password"
              ref={passwordRef}
            />
          </div>
          <Button type="submit">로그인</Button>
        </S.LoginForm>
        <S.UtilBox>
          <div className="keep-wrap">
            {/* todo */}
            {/* <input id="keep-login" type="checkbox" /> */}
            {/* <label htmlFor="keep-login">로그인 유지</label> */}
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

export default SignIn;
