import * as S from "./style/style-SignUp";
import Joi from "joi";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Notification from "../common/Notification";
import PrivacyAgreement from "./PrivacyAgreement";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";
import { showNotification } from "../../store/notificationSlice";
import { validate, checkNull } from "../../utils/checkValidation-utils";
import { useAppDispatch, useAppSelector } from "../../store";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  createUser,
  checkDuplicateId,
  verifyEmail,
} from "../../client-apis/api/auth";
import {
  idSchema,
  passwordSchema,
  emailSchema,
} from "../../utils/common-utils";

const validationSchema = Joi.object({
  userId: idSchema,
  password: passwordSchema,
  confirmPassword: Joi.ref("password"),
  email: emailSchema,
}).with("password", "confirmPassword");

interface CreateUser {
  message: string;
  createdUserId: string;
}
interface CheckId {
  message: string;
  isExistsId: boolean;
}

interface VerifyEmail {
  message: string;
  verificationCode: string;
}

//컴포넌트 시작
const SignUp = () => {
  const [verifiedId, setVerifiedId] = useState<string | null>(null);
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);
  const [isDuplicateId, setIsDuplicateId] = useState<boolean | null>(null); //아이디 중복확인
  const [verificationCode, setVerificationCode] = useState<string | null>(null);
  const [isSentMail, setIsSentMail] = useState(false);
  const [timer, setTimer] = useState(180);
  const [isCheckedPrivacyAgreement, setIsCheckedPrivacyAgreement] =
    useState(false);
  const [isActivePrivacyModal, setIsActivePrivacyModal] = useState(false);

  const createUserFetch = useFetch<CreateUser>(createUser);
  const checkIdFetch = useFetch<CheckId>(checkDuplicateId);
  const verifyEmailFetch = useFetch<VerifyEmail>(verifyEmail);

  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPwdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const verificationCodeRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  //사용자 피드백을 위해 Notification 컴포넌트를 렌더링 하기 위한 함수
  const activateNotification = useCallback(
    (message: string, isPositive: boolean = false) => {
      dispatch(showNotification({ isPositive, message }));
    },
    [dispatch]
  );

  /* 아이디 중복 체크 함수 시작 */
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

    //아이디 유효성 검사 통과 후, 아이디 중복 체크 API 요청 시작
    //resetState()가 과연 필요한 것인지?
    checkIdFetch.resetState();
    await checkIdFetch.sendRequest(userId);
  };

  //아이디 중복 체크 API 요청 이후 로직
  useEffect(() => {
    if (!checkIdFetch.isLoading && !checkIdFetch.error && checkIdFetch.data) {
      const { isExistsId } = checkIdFetch.data;
      if (!isExistsId) {
        const userId = userIdRef.current!.value;
        setIsDuplicateId(false);
        setVerifiedId(userId);
      } else {
        setIsDuplicateId(true);
        setVerifiedId(null);
      }
    } else if (checkIdFetch.error) {
      activateNotification(checkIdFetch.error.message);
    }
  }, [checkIdFetch, dispatch, activateNotification]);
  /* 아이디 중복 체크 끝 */

  /* 이메일 인증 함수 시작 */
  const handleVerifyEmail = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    //이메일 인증 관련 서버 API 요청 이전에 이메일 유효성 검사
    const email = emailRef.current!.value;
    const validationSchema = Joi.object({ email: emailSchema });
    const validationResult = await validate(validationSchema, { email });

    if (validationResult.errorMessage) {
      activateNotification(validationResult.errorMessage);
      return;
    }

    //유효성 검사 통과후 이메일 인증 API 요청
    //resetState()가 과연 필요한 것인지??
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
      setIsSentMail(true);
      setVerifiedEmail(email);
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
  /* 이메일 인증 관련 함수 끝 */

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

    //아이디 중복 체크 이후, 다른 아이디로 변경하고 가입 버튼을 누르는 경우
    if (verifiedId !== userId) {
      activateNotification("아이디 중복 체크를 진행해 주세요");
      return;
    }

    //이메일 인증 이후, 다른 이메일로 변경하고 가입 버튼을 누르는 경우
    if (verifiedEmail !== email) {
      activateNotification("인증된 이메일이어야 합니다.");
      return;
    }

    if (verificationCodeRef.current === null) {
      activateNotification("이메일 인증을 진행해 주세요");
      return;
    }

    if (timer <= 0) {
      setIsSentMail(false);
      activateNotification(
        "시간이 모두 경과했습니다. 이메일 인증을 다시 진행해 주세요"
      );
      return;
    }

    const enteredCode = verificationCodeRef.current!.value;

    if (verificationCode !== enteredCode) {
      activateNotification("인증 번호가 틀렸습니다");
      return;
    }

    if (!isCheckedPrivacyAgreement) {
      activateNotification("개인정보 수집 및 이용에 동의해야 합니다.");
      return;
    }

    //회원가입 과정에서 모든 경우의 수를 통과하고 최종적으로 이메일 인증 코드를 제대로 입력할 경우
    if (verificationCode === enteredCode) {
      createUserFetch.resetState();
      await createUserFetch.sendRequest({ userId, password, email });
    }
  };

  //회원가입 API 요청 이후 로직
  useEffect(() => {
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
      {isActivePrivacyModal ? (
        <PrivacyAgreement onActivateModal={setIsActivePrivacyModal} />
      ) : null}
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
                placeholder="example@email.com"
              />
              <Button
                type="button"
                onClick={handleVerifyEmail}
                className="email__btn"
              >
                인증
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
              onChange={() =>
                setIsCheckedPrivacyAgreement((prevState) => !prevState)
              }
              checked={isCheckedPrivacyAgreement}
            />
            <label htmlFor="checkobx">
              [필수] 개인정보 수집 및 이용 동의
              <button
                type="button"
                className="agreement__btn--detail"
                onClick={() => setIsActivePrivacyModal(true)}
              >
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
