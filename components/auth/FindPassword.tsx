import * as S from "./style/style-FindPassword";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { idSchema, emailSchema } from "../../utils/common-utils";
import { validate } from "../../utils/checkValidation-utils";
import { useAppDispatch, useAppSelector } from "../../store";
import { showNotification } from "../../store/notificationSlice";
import { findPassword } from "../../client-apis/api/auth";
import { useFetch } from "../../hooks/useFetch";
import Notification from "../common/Notification";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Joi from "joi";

interface FindPassword {
  message: string;
  success: boolean;
}

const FindPassword = () => {
  const userIdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const findPwdFetch = useFetch<FindPassword>(findPassword);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

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
    findPwdFetch.resetState();
    await findPwdFetch.sendRequest({
      userId: enteredUserId,
      email: enteredEmail,
    });
  };

  useEffect(() => {
    if (!findPwdFetch.isLoading && findPwdFetch.error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: findPwdFetch.error.message,
        })
      );
      findPwdFetch.resetState();
    }
  }, [findPwdFetch, dispatch]);

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
              findPwdFetch.data?.success ? "positive" : "negative"
            }`}
          >
            {findPwdFetch.data?.message}
          </p>
          {findPwdFetch.data?.success ? (
            <Button
              type="button"
              onClick={() => router.replace("/auth/signIn")}
            >
              로그인 하기
            </Button>
          ) : null}
        </div>
        <Button type="submit">
          {findPwdFetch.isLoading ? "요청 중..." : "비밀번호 찾기"}
        </Button>
      </form>
    </S.FindPasswordLayout>
  );
};

export default FindPassword;
