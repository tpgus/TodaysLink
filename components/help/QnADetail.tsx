import { useEffect } from "react";
import { QnaType } from "../../types/commonType";
import Button from "../ui/Button";
import * as S from "./style/style-QnADetail";

interface PropsType {
  onClose: () => void;
  qna: QnaType;
}

const QnADetail = (props: PropsType) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <S.Backdrop onClick={props.onClose} />
      <S.ModalContainer>
        <ul>
          <li>
            <span>문의 유형</span>
            <p>사이트 이용</p>
          </li>
          <li>
            <span>문의 제목</span>
            <p>문의 제목입니다.</p>
          </li>
          <li>
            <span>작성일</span>
            <p>작성일 입니다</p>
          </li>
          <li>
            <span>문의 내용</span>
            <p>문의 내용입니다.</p>
          </li>
          <li className="answer">
            <span className="answer__span">답변</span>
            <p className="answer__p">
              {!props.qna.answer
                ? "답변답변이니다답변 아직 등록되지 않았습니다답변이 아답변이 아직 등록되지 않았습니다답변이 아답변이 아직 등록되지 않았습니다답변이 아답변이 아직 등록되지 않았습니다답변이 아답변이 아직 등록되지 않았습니다답변이 아직 등록되지 않았습니다답변이 아직 등록되지 않았습니다답변이 아직 등록되지 않았습니다답변이 아직 등록되지 않았습니다답변이 아직 등록되지 않았습니다."
                : null}
            </p>
          </li>
          <li className="close">
            <Button onClick={props.onClose}>닫기</Button>
          </li>
        </ul>
      </S.ModalContainer>
    </>
  );
};

export default QnADetail;
