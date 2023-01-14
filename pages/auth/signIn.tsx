import React, { ReactElement } from "react";
import Login from "../../components/auth/Login";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default LoginPage;
