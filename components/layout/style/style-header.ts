import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.indigo};
  width: 100%;
`;

export const Navigation = styled.nav`
  ${media.pc} {
    padding: 0 4rem;
  }

  padding: 0 1rem;
  margin: 0 auto;

  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.color["indigo-500"]};
    padding: 1.5rem 0;
  }

  .search-wrapper {
    ${media.pc} {
      width: 30%;
    }

    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 0.3rem 0.75rem;
    border-radius: 10rem;

    input {
      ${media.pc} {
        width: 100%;
        font-size: 1rem;
      }

      display: inline-block;
      border-radius: 10rem;
      border: none;
      text-align: left;
      color: rgba(0, 0, 0, 0.7);

      &:focus {
        border-color: transparent;
        outline: none;
      }
    }

    button {
      ${media.pc} {
        padding: 0.5rem 1rem;
      }

      display: inline-block;
      background-color: transparent;
      border: none;
    }
  }

  .login-wrapper {
    button {
      ${media.pc} {
        padding: 0.5rem 1rem;
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
`;
