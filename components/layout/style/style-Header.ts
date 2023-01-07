import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.indigo};

  nav {
    ${media.pc} {
      padding: 0 4rem;
    }

    padding: 0 1rem;
    margin: 0 auto;

    .nav-wrapper {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      /* border-bottom: 1px solid ${({ theme }) =>
        theme.color["indigo-500"]}; */
      padding: 1.5rem 0;
    }

    .login-wrapper {
      button {
        ${media.pc} {
          padding: 0.7rem 1rem;
          font-size: 1rem;
        }

        border-radius: 0.375rem;
        border: transparent;
        padding: 0.3rem 0.75rem;
        background-color: ${({ theme }) => theme.color["indigo-500"]};
        font-size: 0.75rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: white;
        display: inline-block;

        &:hover {
          background-color: rgba(117, 119, 243, 0.8);
        }
      }
    }
  }
`;

export const Logo = styled.div``;
