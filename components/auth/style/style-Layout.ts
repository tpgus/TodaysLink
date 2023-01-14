import styled from "styled-components";
import { media } from "../../../styles/theme";

export const LayoutContainer = styled.div`
  height: 100vh;
  margin-top: -6.8rem;
  background-color: ${({ theme }) => theme.color["gray-200"]};
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  ${media.pc} {
    width: 25%;
  }

  .logo-wrapper {
    padding-top: 3rem;
    text-align: center;
    width: 100%;
  }
`;
