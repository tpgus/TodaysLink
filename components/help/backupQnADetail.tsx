import { useEffect } from "react";
import { QnaType } from "../../types/commonType";
import Button from "../ui/Button";
import * as S from "./style/style-QnADetail";

interface PropsType {
  onClose: () => void;
  qna: QnaType;
}

const QnADetail = (props: PropsType) => {
  const { qna } = props;
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
            <p>{qna.type}</p>
          </li>
          <li>
            <span>문의 제목</span>
            <p>{qna.title}</p>
          </li>
          <li>
            <span>작성일</span>
            <p>{qna.registeredDate.toString()}</p>
          </li>
          <li className="content">
            <span className="content__span">문의 내용</span>
            <p className="content__p">{qna.content}</p>
          </li>
          <li className="answer">
            <span className="answer__span">답변</span>
            <p className="answer__p">
              {qna.answer ? qna.answer : "[답변 대기 중]"}
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
