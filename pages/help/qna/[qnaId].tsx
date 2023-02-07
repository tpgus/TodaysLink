import QnADetail from "../../../components/help/QnADetail";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
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
  const [qna, setQna] = useState<QnaType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { qnaId } = router.query as Query;

  useEffect(() => {
    const fetchQnA = async () => {
      const qna = await getQnAById(qnaId);
      setQna(qna);
    };
    fetchQnA();
  }, [qnaId]);

  if (qna === null && isLoading) return <LoadingSpinner />;
  if (qna === null && !isLoading) return <p>다시 시도해 주세요</p>;

  return <QnADetail qna={qna} />;
};

export default QnaDetailPage;

QnaDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};
