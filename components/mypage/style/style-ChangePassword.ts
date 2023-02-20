import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ChangePasswordLayout = styled.div`
  margin: 0 auto;
  text-align: center;

  ${media.pc} {
    max-width: 80%;
  }
`;

export const ChangePasswordContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.color["gray-100"]};

  ${media["fix-mobile"]} {
    font-size: 0.9rem;
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
      margin-top: 10%;
    }
  }

  form {
    text-align: center;
    height: 100%;
    margin-top: 5%;

    ${media.pc} {
      padding: 5rem 0;
    }
  }

  .form__div {
    width: 100%;
    padding: 0.5rem 0;
    margin-top: 1rem;

    ${media["fix-mobile"]} {
      padding: unset;
    }
  }

  label {
    text-align: right;
    display: inline-block;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color["gray-700"]};
    padding: 0 0.5rem;
    width: 20%;

    ${media["fix-mobile"]} {
      width: 30%;
      text-align: center;
      padding: unset;
      font-size: 0.875rem;
    }
  }

  input {
    height: 1.5rem;
    width: 50%;

    &:focus {
      border: 2px solid ${({ theme }) => theme.color["indigo-600"]};
      width: calc(50% - 2px);
      outline: none;
    }
  }

  .actions {
    padding: 3rem 0;
    width: 20%;
    margin: 0 auto;
  }

  button {
    width: 100%;
  }
`;
