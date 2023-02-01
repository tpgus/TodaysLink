import Link from "next/link";
import * as S from "./style/style-NotFound";

interface PropsType {
  errorMessage: string;
}

const NotFound = (props: PropsType) => {
  return (
    <S.NotFoundContainer>
      <main>
        {props.errorMessage ? <p>{props.errorMessage}</p> : null}
        <p>404</p>
        <div>
          <div className="message">
            <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
            <p>Please check the URL in the address bar and try again</p>
          </div>
          <div className="actions">
            <Link href="/">홈으로 이동</Link>
            <Link href="/help/qna">문의하기</Link>
          </div>
        </div>
      </main>
    </S.NotFoundContainer>
  );
};

export default NotFound;
