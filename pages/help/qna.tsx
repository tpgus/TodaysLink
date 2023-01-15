import React from "react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";
import HelpPageLayout from "../../components/help/HelpPageLayout";
import QNAList from "../../components/help/QnAList";

const QNAPage: NextPageWithLayout = () => {
  return (
    <>
      <QNAList />
    </>
  );
};

QNAPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default QNAPage;
