import * as S from "./style/style-PrivacyAgreement";
import Button from "../ui/Button";
import { detail } from "../../public/static-data/privacy-agreement";
import { v4 as uuidv4 } from "uuid";
import { Dispatch, SetStateAction } from "react";

interface PropsType {
  onActivateModal: Dispatch<SetStateAction<boolean>>;
}

//개인정보 수집 및 이용 동의 모달
const PrivacyAgreement = (props: PropsType) => {
  const privacyDetail = detail.split("\n");

  return (
    <>
      <S.Backdrop onClick={() => props.onActivateModal(false)} />
      <S.ModalContainer>
        <div>
          <p className="title">개인정보처리방침</p>
        </div>
        <div className="content">
          {privacyDetail.map((p) => (
            <p key={uuidv4()}>{p ? p : null}&nbsp;</p>
          ))}
        </div>
        <div className="actions">
          <Button onClick={() => props.onActivateModal(false)}>닫기</Button>
        </div>
      </S.ModalContainer>
    </>
  );
};

export default PrivacyAgreement;
