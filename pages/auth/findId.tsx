import React, { ReactElement } from "react";
import FindId from "../../components/auth/FindId";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";

const findIdPage: NextPageWithLayout = () => {
  return <FindId />;
};

findIdPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default findIdPage;
