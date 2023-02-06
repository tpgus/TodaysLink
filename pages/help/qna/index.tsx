import * as S from "../../../components/help/style/style-QnAWriting";
import { useRef, useState, useEffect } from "react";
import { getQnAList } from "../../../client-apis/api/qna";
import Head from "next/head";
import QnAList from "../../../components/help/QnAList";
import QnAWriting from "../../../components/help/QnAWriting";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../../pages/_app";
import type { QnaType } from "../../../types";

const QnAPage: NextPageWithLayout = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveWritingArea, setIsActiveWritingArea] = useState(false);
  const [qnaList, setQnaList] = useState<QnaType[] | null>(null);

  useEffect(() => {
    const fetchQnA = async () => {
      const result = await getQnAList();
      setQnaList(result.qnaList);
    };

    try {
      setIsLoading(true);
      fetchQnA();
    } catch (error) {
      //에러 처리
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addNewQna = (qna: QnaType) => {
    if (!qnaList) return;
    setQnaList([qna, ...qnaList]);
  };

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
            <QnAWriting
              onComplete={toggleWritingBtn}
              onAddQnaToList={addNewQna}
            />
          </div>
        </div>
      </S.QnAHeaderContainer>
      {isLoading ? <LoadingSpinner /> : null}
      {!isLoading && qnaList !== null ? (
        <QnAList qnaList={qnaList} isLoading={isLoading} />
      ) : null}
    </>
  );
};

QnAPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default QnAPage;
