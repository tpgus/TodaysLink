import React, { ReactElement } from "react";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import Login from "../../components/auth/Login";
import type { NextPageWithLayout } from "../../pages/_app";

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default LoginPage;
