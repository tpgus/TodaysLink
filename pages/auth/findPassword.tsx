import React, { ReactElement } from "react";
import FindPassword from "../../components/auth/FindPassword";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";

const findPasswordPage: NextPageWithLayout = () => {
  return <FindPassword />;
};

findPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default findPasswordPage;
