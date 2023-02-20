import * as S from "./style/style-ChangePassword";
import Joi from "joi";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Notification from "../common/Notification";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { validate } from "../../utils/checkValidation-utils";
import { useEffect, useRef } from "react";
import { changePassword } from "../../client-apis/api/auth";
import { showNotification } from "../../store/notificationSlice";
import { passwordSchema } from "../../utils/common-utils";
import { useAppSelector, useAppDispatch } from "../../store";

const ChangePassword = () => {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const changePasswordFetch = useFetch(changePassword); //타입 정의

  const router = useRouter();
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  //양식 제출
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const oldPassword = oldPasswordRef.current!.value;
    const newPassword = newPasswordRef.current!.value;
    const confirmNewPassword = confirmPasswordRef.current!.value;

    const validationSchema = Joi.object({
      oldPassword: Joi.string().min(1).label("기존 비밀번호"),
      password: passwordSchema,
      confirmPassword: Joi.ref("password"),
    }).with("password", "confirmPassword");

    const validationResult = await validate(validationSchema, {
      oldPassword,
      password: newPassword,
      confirmPassword: confirmNewPassword,
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

    // if (window.confirm("비밀번호를 변경하시겠습니까?")) {
    changePasswordFetch.resetState();
    await changePasswordFetch.sendRequest({
      oldPassword,
      newPassword,
    });
    // }
  };

  useEffect(() => {
    if (
      !changePasswordFetch.isLoading &&
      !changePasswordFetch.error &&
      changePasswordFetch.data
    ) {
      router.replace(
        {
          pathname: "/mypage",
          query: { isChangedPassword: true },
        },
        "/mypage"
      );
    } else if (changePasswordFetch.error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: changePasswordFetch.error.message,
        })
      );
      changePasswordFetch.resetState();
    }
  }, [changePasswordFetch, dispatch, router]);

  return (
    <S.ChangePasswordLayout>
      {notificationState.isActive ? <Notification /> : null}
      <S.ChangePasswordContainer>
        <h2>비밀번호 변경</h2>
        <form onSubmit={handleSubmit}>
          <div className="form__div prev-password">
            <label htmlFor="prev-passowrd">기존 비밀번호</label>
            <Input id="prev-password" type="password" ref={oldPasswordRef} />
          </div>
          <div className="form__div">
            <label htmlFor="passowrd">새 비밀번호</label>
            <Input
              id="password"
              type="password"
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              ref={newPasswordRef}
            />
          </div>
          <div className="form__div">
            <label htmlFor="confirm-password">비밀번호 확인</label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="비밀번호 확인"
              ref={confirmPasswordRef}
            />
          </div>
          <div className="form__div actions">
            <Button type="submit">
              {changePasswordFetch.isLoading ? "요청 중..." : "변경"}
            </Button>
          </div>
        </form>
      </S.ChangePasswordContainer>
    </S.ChangePasswordLayout>
  );
};

export default ChangePassword;
