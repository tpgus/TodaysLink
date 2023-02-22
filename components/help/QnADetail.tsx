import * as S from "./style/style-QnADetail";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { dateParser } from "../../utils/parser-utils";
import type { QnaType } from "../../types";

interface PropsType {
  qna: QnaType;
}

const QnADetail = (props: PropsType) => {
  const { qna } = props;
  const router = useRouter();

  const registeredDate = dateParser(qna.registeredDate.toDate());

  return (
    <S.QnALayout>
      <h1>1:1 문의 (Q&A)</h1>
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
        <p>{registeredDate}</p>
      </li>
      <li className="content">
        <span className="content__span">문의 내용</span>
        <p className="content__p">{qna.content}</p>
      </li>
      <li className="answer">
        <span className="answer__span">답변</span>
        <p className={"answer__p" + `${qna.answer ? "" : " emphasis"}`}>
          {qna.answer ? qna.answer : "[답변 대기 중]"}
        </p>
      </li>
      <li className="close">
        <Button onClick={() => router.back()}>목록보기</Button>
      </li>
    </S.QnALayout>
  );
};

export default QnADetail;
