import Header from "./Header";
import styled from "styled-components";
import { media } from "../../styles/theme";

interface PropsType {
  children: React.ReactNode;
}

const Layout = (props: PropsType) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 6.5rem;
  ${media.pc} {
    max-width: 75rem;
    /* padding: 0rem 2rem; */
  }
`;
