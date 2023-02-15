import * as S from "./style/style-SignUp";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { validate, checkNull } from "../../utils/checkValidation-utils";
import { useAppDispatch, useAppSelector } from "../../store";
import { showNotification } from "../../store/notificationSlice";
import {
  createUser,
  checkDuplicateId,
  verifyEmail,
} from "../../client-apis/api/auth";
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

interface VerifyEmail {
  message: string;
  verificationCode: string;
}

//컴포넌트 시작
const SignUp = () => {
  const [isDuplicateId, setIsDuplicateId] = useState<Validation>(null); //아이디 중복확인
  const [verifiedId, setVerifiedId] = useState<string | null>(null);
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);
  const [isSentMail, setIsSentMail] = useState(false);
  const [verificationCode, setVerificationCode] = useState<string | null>(null);
  const [timer, setTimer] = useState(180);

  const createUserFetch = useFetch<CreateUser>(createUser);
  const checkIdFetch = useFetch<CheckId>(checkDuplicateId);
  const verifyEmailFetch = useFetch<VerifyEmail>(verifyEmail);

  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPwdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const verificationCodeRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const notificationState = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  //사용자 피드백을 위한 Notification 컴포넌트 렌더링을 트리거하는 함수
  const activateNotification = useCallback(
    (message: string, isPositive: boolean = false) => {
      dispatch(showNotification({ isPositive, message }));
    },
    [dispatch]
  );

  /* 아이디 중복 체크 시작 */
  const handleCheckId = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    //서버 API 요청 이전에 유효성 검사
    const userId = userIdRef.current!.value;
    const validationSchema = Joi.object({ userId: idSchema });
    const validationResult = await validate(validationSchema, {
      userId,
    });

    if (validationResult.errorMessage) {
      activateNotification(validationResult.errorMessage);
      setIsDuplicateId(null);
      return;
    }

    //유효성 검사 통과 후 요청 시작
    await checkIdFetch.sendRequest(userId);
  };

  useEffect(() => {
    //아이디 중복 체크 서버 API 요청 이후
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
    } else if (checkIdFetch.error) {
      activateNotification(checkIdFetch.error.message);
    }
    checkIdFetch.resetState();
  }, [checkIdFetch, dispatch, activateNotification]);
  /* 아이디 중복 체크 끝 */

  /* 이메일 인증 시작 */
  const handleVerifyEmail = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    //이메일 인증 서버 API 요청 이전에 유효성 검사
    const email = emailRef.current!.value;
    const validationSchema = Joi.object({ email: emailSchema });
    const validationResult = await validate(validationSchema, { email });

    if (validationResult.errorMessage) {
      activateNotification(validationResult.errorMessage);
      return;
    }

    //유효성 검사 통과후 이메일 인증 API 요청
    await verifyEmailFetch.sendRequest(email);
  };

  useEffect(() => {
    //이메일 인증 API 요청 이후 로직
    if (
      !verifyEmailFetch.isLoading &&
      !verifyEmailFetch.error &&
      verifyEmailFetch.data
    ) {
      const email = emailRef.current!.value;
      setVerifiedEmail(email);
      setIsSentMail(true);
      setVerificationCode(verifyEmailFetch.data.verificationCode);
      setTimer(180);
    } else if (verifyEmailFetch.error) {
      activateNotification(verifyEmailFetch.error.message);
      setVerifiedEmail(null);
      setIsSentMail(false);
    }
    verifyEmailFetch.resetState();
  }, [verifyEmailFetch, dispatch, activateNotification]);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (isSentMail) {
      timer = setInterval(() => {
        setTimer((prevTime) => {
          const currentTime = prevTime - 1;
          if (currentTime === 0) {
            clearInterval(timer);
          }
          return currentTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSentMail]);
  /* 이메일 인증 끝 */

  /* 회원가입 시작 */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userId = userIdRef.current!.value;
    const password = passwordRef.current!.value;
    const confirmPassword = confirmPwdRef.current!.value;
    const email = emailRef.current!.value;

    //사용자 입력 값 유효성 체크
    const validationResult = await validate(validationSchema, {
      userId,
      password,
      confirmPassword,
      email,
    });

    if (validationResult.errorMessage) {
      activateNotification(validationResult.errorMessage);
      return;
    }

    if (verifiedId !== userId) {
      //아이디 중복 체크 이후, 다른 아이디로 변경하고 가입 버튼을 누르는 경우
      activateNotification("아이디 중복 체크를 진행해 주세요");
      return;
    }

    if (verifiedEmail !== email) {
      //이메일 인증 이후, 다른 이메일로 변경하고 가입 버튼을 누르는 경우
      activateNotification("인증된 이메일이어야 합니다.");
      return;
    }

    if (verificationCodeRef.current === null) {
      activateNotification("이메일 인증을 진행해 주세요");
      return;
    }

    //회원가입 과정에서 모든 경우의 수를 통과하고 최종적으로 이메일 인증 코드를 제대로 입력할 경우
    const enteredCode = verificationCodeRef.current!.value;

    if (verificationCode === enteredCode && timer > 0) {
      createUserFetch.resetState();
      await createUserFetch.sendRequest({ userId, password, email });
    } else if (timer === 0) {
      setIsSentMail(false);
      activateNotification(
        "시간이 모두 경과했습니다. 이메일 인증을 다시 진행해 주세요"
      );
    } else {
      activateNotification("인증 번호가 틀렸습니다");
    }
  };

  useEffect(() => {
    //회원가입 API 요청 이후 로직
    if (
      !createUserFetch.isLoading &&
      !createUserFetch.error &&
      createUserFetch.data?.createdUserId
    ) {
      router.replace("/auth/signIn");
    } else if (createUserFetch.error) {
      activateNotification(createUserFetch.error.message);
    }
  }, [createUserFetch, router, dispatch, activateNotification]);
  /* 회원가입 끝 */

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
                {checkIdFetch.isLoading ? "요청 중..." : "중복 체크"}
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
                {verifyEmailFetch.isLoading ? "요청 중..." : "인증"}
              </Button>
            </div>
            {isSentMail ? (
              <>
                <div>
                  <Input
                    type="text"
                    placeholder="인증 번호를 입력하세요"
                    ref={verificationCodeRef}
                  />
                </div>
                <p className={`email__p`}>
                  {`인증 메일이 전송되었습니다. 메일을 확인해 주세요 (유효 시간 :
                  ${timer}초)`}
                </p>
              </>
            ) : null}
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
