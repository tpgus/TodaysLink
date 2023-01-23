import QnADetail from "../../../components/help/QnADetail";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import type { ReactElement } from "react";

const QnaDetailPage = () => {
  return <QnADetail />;
};

export default QnaDetailPage;

QnaDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};
