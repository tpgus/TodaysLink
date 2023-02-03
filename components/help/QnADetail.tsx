import { QnaType } from "../../types";
import { useRouter } from "next/router";
import { dateParser } from "../../helpers/parser-utils";
import Button from "../ui/Button";
import * as S from "./style/style-QnADetail";

interface PropsType {
  qna: QnaType | null;
}

const QnADetail = (props: PropsType) => {
  const router = useRouter();
  const { qna } = props;

  if (!qna) return <p>다시 시도해 주세요</p>;

  //추후 아래의 코드를 주석 코드로 변경 및 개선 기록
  // const formattedDate = dateParser(qna.registeredDate);
  const formattedDate = new Date(qna.registeredDate).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
  );

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
        <p>{formattedDate}</p>
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
