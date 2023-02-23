import * as S from "./style/style-PasswordModal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

interface PropsType {
  onActivateModal: Dispatch<SetStateAction<boolean>>;
}

const PasswordModal = (props: PropsType) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <S.ModalBackdrop onClick={() => props.onActivateModal(false)} />
      <S.ModalContainer>
        <div className="title wrap__div">
          <h2>비밀번호를 입력하세요</h2>
        </div>
        <div className="password wrap__div">
          <Input type="password" className="password__input" />
        </div>
        <div className="actions wrap__div">
          <Button onClick={() => props.onActivateModal(false)} bg="#ff0000">
            취소
          </Button>
          <Button>확인</Button>
        </div>
      </S.ModalContainer>
    </>
  );
};

export default PasswordModal;
