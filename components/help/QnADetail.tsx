import * as S from "./style/style-QnADetail";

const QnADetail = () => {
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
