import React, { ReactElement } from "react";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";

const findPasswordPage: NextPageWithLayout = () => {
  return <div>비밀번호 찾기</div>;
};

findPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default findPasswordPage;
