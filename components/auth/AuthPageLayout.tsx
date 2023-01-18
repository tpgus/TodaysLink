import Logo from "../ui/Logo";
import * as S from "./style/style-Layout";

interface PropsType {
  children: React.ReactNode;
}

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
