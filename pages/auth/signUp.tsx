import React, { ReactElement } from "react";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";

const SignUpPage: NextPageWithLayout = () => {
  return <div>회원가입 페이지</div>;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default SignUpPage;
