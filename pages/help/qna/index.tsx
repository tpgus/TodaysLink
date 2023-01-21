import { useEffect, useRef, useState } from "react";
import * as S from "../../../components/help/style/style-QnAWriting";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import QnAList from "../../../components/help/QnAList";
import Head from "next/head";
import QnAWriting from "../../../components/help/QnAWriting";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../../pages/_app";

const QnAPage: NextPageWithLayout = () => {
  //Q&A 페이지는 특정 유저에 속하는 데이터이므로 사전 렌더링의 큰 의미가 없다.
  //따라서 useEffect를 통해 클라이언트 사이드에서 데이터를 패치해 온다.
  //그런데 여기서 할 필요가 있나?
  useEffect(() => {
    fetch("/api/qna")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isActiveWritingArea, setIsActiveWritingArea] = useState(false);

  const toggleWritingBtn = () => {
    if (parentRef.current === null || childRef.current === null) return;

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = childRef.current.clientHeight + "px";
    }

    setIsActiveWritingArea((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>투데이 링크 - Q&A (1:1 문의)</title>
        <meta
          name="description"
          content="사이트 이용과 관련하여 궁금한 내용을 문의하실 수 있습니다"
        />
      </Head>
      <S.QnAHeaderContainer>
        <div className="header-wrap">
          <div className="title-wrap">
            <h1>1:1 문의 (Q&A)</h1>
          </div>
          <div className="btn-wrap">
            <button onClick={toggleWritingBtn}>
              {!isActiveWritingArea ? "문의하기" : "닫기"}
            </button>
          </div>
        </div>
        <div className="parent" ref={parentRef}>
          <div ref={childRef}>
            <QnAWriting onComplete={toggleWritingBtn} />
          </div>
        </div>
      </S.QnAHeaderContainer>
      <QnAList />
    </>
  );
};

QnAPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default QnAPage;
