import { QnaType } from "../../types/commonType";
import Button from "../ui/Button";
import * as S from "./style/style-QnADetail";

interface PropsType {
  qna: QnaType | null;
}

const QnADetail = (props: PropsType) => {
  const { qna } = props;
  console.log(qna);
  if (qna === null) return <p>다시 시도해 주세요</p>;

  // if (qna === null) return <p>다시 시도해 주세요</p>;

  return (
    <S.QnALayout>
      <h1>1:1 문의 (Q&A)</h1>
      <S.QnAContainer>
        {/* <li>
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
          <Button>목록보기</Button>
        </li> */}
      </S.QnAContainer>
    </S.QnALayout>
  );
};

export default QnADetail;
