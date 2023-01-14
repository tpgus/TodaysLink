import styled from "styled-components";
import { media } from "../../../styles/theme";

export const SingUpLayout = styled.div`
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
    margin-top: 20%;
  }
`;

export const SignUpContainer = styled.section`
  width: 80%;
  margin-top: 5%;

  ${media.pc} {
    margin-top: 10%;
  }
`;

export const SingUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .form__div {
    margin-top: 1rem;
  }

  .form__btn {
    margin-top: 2rem;
  }

  label {
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color["gray-700"]};
    span {
      display: inline-block;
      overflow: hidden;
      width: 4px;
      height: 4px;
      margin-top: 7px;
      border-radius: 50%;
      background-color: red;
      text-indent: -9999px;
      vertical-align: top;
    }
  }

  input {
    margin-top: 0.25rem;
    width: calc(100% - 1.5rem);
    height: 1.5rem;
  }

  .email__div {
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
  }

  .email__input {
    width: 70%;
    margin: unset;
  }

  .email__btn {
    width: 20%;
    padding: unset;
  }

  .form__div--agreement {
    display: flex;
    align-items: center;
  }

  .agreement__checkbox {
    width: 1rem;
    height: 1rem;
  }

  .agreement__btn--detail {
    margin-left: 0.3rem;
    border: transparent;
    background-color: transparent;
    color: ${({ theme }) => theme.color["gray-500"]};
    border-bottom: 1px solid #aaa;
  }
`;
