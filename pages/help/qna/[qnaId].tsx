import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QnADetail from "../../../components/help/QnADetail";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import { QnaType } from "../../../types/commonType";
import type { ReactElement } from "react";

const QnaDetailPage = () => {
  const router = useRouter();
  const [qna, setQna] = useState<QnaType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { qnaId } = router.query;

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/qna/${qnaId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setQna(data.qnaItem);
        console.log(data.qnaItem);
      });
  }, [qnaId]);

  if (qna === null && isLoading) return <LoadingSpinner />;
  if (qna === null && !isLoading) return <p>다시 시도해 주세요</p>;

  return <QnADetail qna={qna} />;
};

export default QnaDetailPage;

QnaDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};
