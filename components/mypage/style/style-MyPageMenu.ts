import styled from "styled-components";
import { media } from "../../../styles/theme";

export const MyPageLayout = styled.div`
  margin: 0 auto;
  text-align: center;

  ${media.pc} {
    max-width: 80%;
  }
`;

export const MenuContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.color["gray-100"]};

  ${media["fix-mobile"]} {
    height: calc(100vh - 5rem);
  }

  ${media.pc} {
    width: 50%;
    height: calc(100vh - 6.8rem);
  }

  h2 {
    margin-top: 15%;
    text-align: center;
    font-size: 1.5rem;

    ${media.pc} {
      font-size: 2.5rem;
      padding: 4rem 0;
      margin-top: 10%;
    }
  }

  .login-info {
    color: ${({ theme }) => theme.color["gray-500"]};
  }

  .menu {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }

  .menu_ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    height: auto;
  }

  li {
    margin: 1rem 0;
    width: 100%;
  }

  button {
    border: transparent;
    background-color: transparent;
    font-weight: bold;
    padding: 0.5rem;
    border-bottom: 2px solid #000;
  }
`;
