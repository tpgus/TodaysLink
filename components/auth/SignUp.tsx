import * as S from "./style/style-SignUp";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { validate, checkNull } from "../../utils/checkValidation-utils";
import { useAppDispatch, useAppSelector } from "../../store";
import { showNotification } from "../../store/notificationSlice";
import { createUser, checkId } from "../../client-apis/api/auth";
import { useFetch } from "../../hooks/useFetch";
import {
  idSchema,
  passwordSchema,
  emailSchema,
} from "../../utils/common-utils";
import Joi from "joi";
import Notification from "../common/Notification";
import Input from "../ui/Input";
import Button from "../ui/Button";

const validationSchema = Joi.object({
  userId: idSchema,
  password: passwordSchema,
  confirmPassword: Joi.ref("password"),
  email: emailSchema,
}).with("password", "confirmPassword");

type Validation = boolean | null;

interface CreateUser {
  message: string;
  createdUserId: string;
}
interface CheckId {
  message: string;
  isExist: boolean;
}

//컴포넌트 시작
const SignUp = () => {
  const [isValidEmail, setIsValidEmail] = useState<Validation>(null); //이메일 인증
  const [isDuplicateId, setIsDuplicateId] = useState<Validation>(null); //아이디 중복확인
  const [verifiedId, setVerifiedId] = useState<string | null>(null);
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);

  const createUserFetch = useFetch<CreateUser>(createUser);
  const checkIdFetch = useFetch<CheckId>(checkId);

  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPwdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const notificationState = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  /* 아이디 중복 체크 시작 */
  const handleCheckId = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    // API 요청 이전에 유효성 검사
    const userId = userIdRef.current!.value;
    const validationSchema = Joi.object({ userId: idSchema });
    const validationResult = await validate(validationSchema, {
      userId,
    });

    if (validationResult.errorMessage) {
      dispatch(
        showNotification({
          isPositive: false,
          message: validationResult.errorMessage,
        })
      );
      setIsDuplicateId(null);
      return;
    }

    //유효성 검사 통과 후 요청
    await checkIdFetch.sendRequest(userId);
  };

  useEffect(() => {
    //아이디 중복 체크 API 요청 이후 로직
    if (!checkIdFetch.isLoading && !checkIdFetch.error && checkIdFetch.data) {
      const { isExist } = checkIdFetch.data;
      const userId = userIdRef.current!.value;

      if (!isExist) {
        setIsDuplicateId(false);
        setVerifiedId(userId);
      } else {
        setIsDuplicateId(true);
        setVerifiedId(null);
      }
      checkIdFetch.resetState();
    } else if (checkIdFetch.error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: checkIdFetch.error.toString(),
        })
      );
    }
  }, [checkIdFetch, dispatch]);
  /* 아이디 중복 체크 끝 */

  /* 회원가입 시작 */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //유효성 검사는 서버 API에서도 수행해야 한다.
    event.preventDefault();

    const userId = userIdRef.current!.value;
    const password = passwordRef.current!.value;
    const confirmPassword = confirmPwdRef.current!.value;
    const email = emailRef.current!.value;

    const validationResult = await validate(validationSchema, {
      userId,
      password,
      confirmPassword,
      email,
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

    if (verifiedId !== userId) {
      //아이디 중복 체크 이후, 다른 아이디로 변경하고 가입 버튼을 누르는 경우
      dispatch(
        showNotification({
          isPositive: false,
          message: "아이디 중복 체크를 진행해 주세요",
        })
      );
      return;
    }

    // if (verifiedEmail !== email) {
    //   //이메일 인증 이후, 다른 이메일로 변경하고 가입 버튼을 누르는 경우
    //   showNotification({
    //     isPositive: false,
    //     message: "인증된 이메일이어야 합니다",
    //   });
    //   return;
    // }

    await createUserFetch.sendRequest({ userId, password, email });
  };

  useEffect(() => {
    if (
      !createUserFetch.isLoading &&
      !createUserFetch.error &&
      createUserFetch.data?.createdUserId
    ) {
      //뒤로가기 x
      //createUserFetch.resetState(); 언제?
      router.replace("/auth/signIn");
    } else if (createUserFetch.error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: createUserFetch.error.toString(),
        })
      );
    }
  }, [createUserFetch, router, dispatch]);
  /* 회원가입 끝 */

  /* 이메일 인증 시작 */
  const handleVerifyEmail = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    console.log("a");
  };
  /* 이메일 인증 끝 */

  return (
    <S.SingUpLayout>
      {notificationState.isActive ? <Notification /> : null}
      <h2>회원가입</h2>
      <S.SignUpContainer>
        <S.SingUpForm onSubmit={handleSubmit}>
          <div className="form__div">
            <label htmlFor="id">
              아이디 <span>필수 입력</span>
            </label>
            <div className="id__div">
              <Input
                id="id"
                type="text"
                className="id__input"
                placeholder="영문, 숫자 5~15자"
                ref={userIdRef}
              />
              <Button type="button" onClick={handleCheckId} className="id__btn">
                중복 체크
              </Button>
            </div>
            {checkNull(isDuplicateId) ? null : (
              <p className={`id__p ${isDuplicateId && "duplicate"}`}>
                {isDuplicateId
                  ? "이미 존재하는 아이디입니다."
                  : "사용 가능한 아이디입니다."}
              </p>
            )}
          </div>
          <div className="form__div">
            <label htmlFor="password">
              비밀번호 <span>필수 입력</span>
            </label>

            <Input
              id="password"
              type="password"
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              ref={passwordRef}
            />
            <Input
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호 재입력"
              ref={confirmPwdRef}
            />
          </div>
          <div className="form__div">
            <label htmlFor="email">
              이메일 <span>필수 입력</span>
            </label>
            <div className="email__div">
              <Input
                className="email__input"
                id="email"
                type="text"
                ref={emailRef}
              />
              <Button
                type="button"
                onClick={handleVerifyEmail}
                className="email__btn"
              >
                인증
              </Button>
            </div>
          </div>
          <div className="form__div form__div--agreement">
            <input
              id="checkobx"
              type="checkbox"
              className="agreement__checkbox"
            />
            <label htmlFor="checkobx">
              [필수] 개인정보 수집 및 이용 동의
              <button type="button" className="agreement__btn--detail">
                자세히 보기
              </button>
            </label>
          </div>
          <Button type="submit" className="form__btn">
            가입하기
          </Button>
        </S.SingUpForm>
      </S.SignUpContainer>
    </S.SingUpLayout>
  );
};

export default SignUp;
