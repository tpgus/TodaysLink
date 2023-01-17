import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../pages/_app";
import FAQList from "../../components/help/FAQList";
import HelpPageLayout from "../../components/help/HelpPageLayout";

const FAQPage: NextPageWithLayout = () => {
  return <FAQList />;
};

FAQPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default FAQPage;
