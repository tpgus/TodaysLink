import * as S from "./style/style-PasswordModal";
import Input from "../ui/Input";
import ReactDOM from "react-dom";
import Notification from "../common/Notification";
import { showNotification } from "../../store/notificationSlice";
import { checkQnAPassword } from "../../client-apis/api/qna";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import type { Dispatch, SetStateAction } from "react";

interface PropsType {
  onActivateModal: Dispatch<SetStateAction<boolean>>;
  onChangePage: () => void;
  qnaId: string;
}

const PasswordModal = (props: PropsType) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  const portalElement = document.getElementById("overlay-root") as HTMLElement;

  useEffect(() => {
    passwordRef.current!.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleCheckPassword = async () => {
    const enteredPassword = passwordRef.current!.value;
    const isValid = await checkQnAPassword(enteredPassword, props.qnaId);
    if (isValid) {
      props.onChangePage();
    } else {
      dispatch(
        showNotification({
          isPositive: false,
          message: "비밀번호가 틀렸습니다",
        })
      );
      passwordRef.current!.focus();
      return;
    }
  };

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && handleCheckPassword();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <S.ModalBackdrop onClick={() => props.onActivateModal(false)} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <S.ModalContainer>
          {notificationState.isActive ? <Notification /> : null}
          <div className="title wrap__div">
            <h2>비밀번호를 입력하세요</h2>
          </div>
          <div className="password wrap__div">
            <Input
              type="password"
              className="password__input"
              onKeyDown={handleOnKeyPress}
              ref={passwordRef}
            />
          </div>
          <div className="actions wrap__div">
            <input
              type="button"
              onClick={() => props.onActivateModal(false)}
              value="취소"
              className="cancel"
            />
            <input
              type="button"
              onClick={handleCheckPassword}
              value="확인"
              className="confirm"
            />
          </div>
        </S.ModalContainer>,
        portalElement
      )}
    </>
  );
};

export default PasswordModal;
