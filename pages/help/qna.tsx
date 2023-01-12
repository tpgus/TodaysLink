import React from "react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";
import HelpPageLayout from "../../components/help-page/HelpPageLayout";

const QNAPage: NextPageWithLayout = () => {
  return <div>wtf</div>;
};

QNAPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default QNAPage;
