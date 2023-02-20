import styled from "styled-components";
import { media } from "../../../styles/theme";
import Button from "../../ui/Button";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.color["gray-600"]};
    margin-top: 10%;
  }
`;

export const LoginContainer = styled.section`
  width: 80%;
  margin-top: 10%;

  ${media.pc} {
    margin-top: 20%;
  }

  .signup__btn {
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .password-wrap {
    margin-top: 0.5rem;
  }

  label {
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color["gray-700"]};
  }

  input {
    display: block;
    margin-top: 0.25rem;
    width: calc(100% - 1.5rem);
    height: 1.5rem;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.color["gray-300"]};
    padding: 0.5rem 0.75rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    appearance: none;

    &:focus {
      border: 2px solid ${({ theme }) => theme.color["indigo-500"]};
      height: calc(1.5rem - 2px);
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color["gray-400"]};
    }
  }

  button {
    width: 100%;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

export const UtilBox = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color["gray-500"]};
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;

  ${media["fix-mobile"]} {
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .keep-wrap {
    display: flex;
    align-items: center;
  }

  ${media["galaxy-fold"]} {
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    display: flex;
  }

  a {
    color: ${({ theme }) => theme.color["gray-500"]};
    display: inline-block;

    :nth-of-type(2) {
      margin-left: 0.5rem;
    }
  }

  .nav__link--id {
    border-right: 2px solid #aaa;
    padding-right: 0.5rem;
  }
`;

export const SignUpButton = styled(Button)`
  margin-top: 3rem;
  background-color: #aaa;
  width: 100%;

  a {
    color: #fff;
    display: inline-block;
    width: 100%;
  }
`;
