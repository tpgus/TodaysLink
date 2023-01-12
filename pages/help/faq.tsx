import React from "react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";
import FAQList from "../../components/help-page/FAQList";
import HelpPageLayout from "../../components/help-page/HelpPageLayout";

const FAQPage: NextPageWithLayout = () => {
  return <FAQList />;
};

FAQPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default FAQPage;
