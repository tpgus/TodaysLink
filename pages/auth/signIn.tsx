import React, { ReactElement } from "react";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import type { NextPageWithLayout } from "../../pages/_app";
import Login from "../../components/auth/Login";

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default LoginPage;
