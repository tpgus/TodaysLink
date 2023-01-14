import React, { ReactElement } from "react";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";

const findIdPage: NextPageWithLayout = () => {
  return <div>아이디 찾기</div>;
};

findIdPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default findIdPage;
