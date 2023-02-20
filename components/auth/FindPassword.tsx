import * as S from "./style/style-FindPassword";
import Joi from "joi";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Notification from "../common/Notification";
import { validate } from "../../utils/checkValidation-utils";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { findPassword } from "../../client-apis/api/auth";
import { showNotification } from "../../store/notificationSlice";
import { useEffect, useRef } from "react";
import { idSchema, emailSchema } from "../../utils/common-utils";
import { useAppDispatch, useAppSelector } from "../../store";

interface FindPassword {
  message: string;
  isSuccess: boolean;
}

const FindPassword = () => {
  const userIdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const findPasswordFetch = useFetch<FindPassword>(findPassword);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  //비밀번호 변경 함수 시작
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredUserId = userIdRef.current!.value;
    const enteredEmail = emailRef.current!.value;

    //서버 API 요청 이전에 유효성 검사
    const validationSchema = Joi.object({
      userId: idSchema,
      email: emailSchema,
    });
    const validationResult = await validate(validationSchema, {
      email: enteredEmail,
      userId: enteredUserId,
    });

    if (validationResult.errorMessage) {
      dispatch(
        showNotification({
          isPositive: false,
          message: validationResult.errorMessage,
        })
      );
      return;
    }

    //서버 API 요청
    findPasswordFetch.resetState();
    await findPasswordFetch.sendRequest({
      userId: enteredUserId,
      email: enteredEmail,
    });
  };

  useEffect(() => {
    if (findPasswordFetch.error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: findPasswordFetch.error.message,
        })
      );
      findPasswordFetch.resetState();
    }
  }, [findPasswordFetch, dispatch]);

  return (
    <S.FindPasswordLayout>
      {notificationState.isActive ? <Notification /> : null}
      <h2>비밀번호 찾기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <Input type="text" ref={userIdRef} />
        </div>
        <div>
          <label>가입시 등록한 이메일</label>
          <Input type="text" placeholder="example@email.com" ref={emailRef} />
        </div>
        <div>
          <p
            className={`message ${
              findPasswordFetch.data?.isSuccess ? "positive" : "negative"
            }`}
          >
            {findPasswordFetch.data?.message}
          </p>
          {findPasswordFetch.data?.isSuccess ? (
            <Button
              type="button"
              onClick={() => router.replace("/auth/signIn")}
            >
              로그인 하기
            </Button>
          ) : null}
        </div>
        <Button type="submit">
          {findPasswordFetch.isLoading ? "요청 중..." : "비밀번호 찾기"}
        </Button>
      </form>
    </S.FindPasswordLayout>
  );
};

export default FindPassword;
