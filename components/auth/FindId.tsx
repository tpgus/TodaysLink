import * as S from "./style/style-FindId";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";
import { emailSchema } from "../../utils/common-utils";
import { validate } from "../../utils/checkValidation-utils";
import { findId } from "../../client-apis/api/auth";
import { useAppDispatch, useAppSelector } from "../../store";
import { showNotification } from "../../store/notificationSlice";
import Joi from "joi";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Notification from "../common/Notification";

interface FindId {
  message: string;
  userId: string;
}

const FindId = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const findIdFetch = useFetch<FindId>(findId);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailRef.current!.value;
    const validationSchema = Joi.object({ email: emailSchema });
    const validationResult = await validate(validationSchema, {
      email: enteredEmail,
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

    findIdFetch.resetState();
    await findIdFetch.sendRequest(enteredEmail);
  };

  useEffect(() => {
    if (findIdFetch.error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: findIdFetch.error.message,
        })
      );
      findIdFetch.resetState();
    }
  }, [findIdFetch, dispatch]);

  return (
    <S.FindIdLayout>
      {notificationState.isActive ? <Notification /> : null}
      <h2>아이디 찾기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>가입시 등록한 이메일을 입력해 주세요</label>
          <Input type="text" placeholder="example@email.com" ref={emailRef} />
        </div>
        {!findIdFetch.isLoading && findIdFetch.data ? (
          <div className="result">
            {findIdFetch.data.userId ? (
              <>
                <p className="positive">
                  해당 이메일에 등록된 아이디는&nbsp;
                  <span className="userId">
                    [&nbsp;{findIdFetch.data.userId}&nbsp;]
                  </span>
                  &nbsp; 입니다.
                </p>
                <ul className="actions">
                  <li>
                    <button
                      className="actions-btn"
                      onClick={() => router.replace("/auth/signIn")}
                    >
                      로그인
                    </button>
                  </li>
                  <li>
                    <button
                      className="actions-btn findPassword__btn"
                      onClick={() => router.replace("/auth/findPassword")}
                    >
                      비밀번호 찾기
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <p className="negative">등록되지 않은 이메일입니다.</p>
            )}
          </div>
        ) : null}
        <Button type="submit">
          {findIdFetch.isLoading ? "요청 중..." : "아이디 찾기"}
        </Button>
      </form>
    </S.FindIdLayout>
  );
};

export default FindId;
