import styled from "styled-components";
import { media } from "../../../styles/theme";

export const LayoutContainer = styled.div`
  height: 100vh;
  margin-top: -5rem;
  background-color: ${({ theme }) => theme.color["gray-200"]};

  ${media.pc} {
    margin-top: -6.8rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;

  ${media.pc} {
    width: 25%;
  }

  .logo-wrapper {
    padding-top: 20%;
    text-align: center;
    width: 100%;
  }
`;
