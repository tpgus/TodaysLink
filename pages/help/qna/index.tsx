import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../../pages/_app";
import HelpPageLayout from "../../../components/help/HelpPageLayout";
import QNAList from "../../../components/help/QnAList";

const QnAPage: NextPageWithLayout = () => {
  return <QNAList />;
};

QnAPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default QnAPage;
