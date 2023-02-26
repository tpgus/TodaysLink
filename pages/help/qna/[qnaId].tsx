import QnADetail from "../../../components/help/QnADetail";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getQnAById } from "../../../client-apis/api/qna";
import type { QnaType } from "../../../types";
import type { ReactElement } from "react";
import type { ParsedUrlQuery } from "querystring";

interface Query extends ParsedUrlQuery {
  qnaId: string;
}

const QnaDetailPage = () => {
  const router = useRouter();
  const { qnaId } = router.query as Query;
  const [qna, setQna] = useState<QnaType | null>(null);

  useEffect(() => {
    const fetchQnA = async () => {
      const qna = await getQnAById(qnaId);
      setQna(qna);
    };
    fetchQnA();
  }, [qnaId]);

  if (!qna) {
    return <p>로딩 중...</p>;
  }

  return <QnADetail qna={qna} />;
};

export default QnaDetailPage;

QnaDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};
