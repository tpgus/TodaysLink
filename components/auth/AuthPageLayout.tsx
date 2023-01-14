import React from "react";
import * as S from "./style/style-Layout";
import Logo from "../ui/Logo";
import type { CompositionType as PropsType } from "../../types";

const AuthPageLayout = (props: PropsType) => {
  return (
    <S.LayoutContainer>
      <S.Main>
        <div className="logo-wrapper">
          <Logo pc={true} txtColor="black" />
        </div>
        {props.children}
      </S.Main>
    </S.LayoutContainer>
  );
};

export default AuthPageLayout;
