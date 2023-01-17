import styled from "styled-components";
import { media } from "../../../styles/theme";

export const WritingContainer = styled.div`
  background-color: ${({ theme }) => theme.color["gray-100"]};

  ${media.tablet} {
    padding: 1rem 0;
  }

  ${media.pc} {
    padding: 1rem 1rem;
  }

  h2 {
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  .form-wrap {
    margin: 0 auto;
    width: 90%;
  }

  form {
    ${media["fix-mobile"]} {
      padding: 1rem 0;
    }
    display: grid;
    grid-template-columns: 1fs;
    column-gap: 1.5rem;
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
    padding: 0.25rem 0;
    color: ${({ theme }) => theme.color["gray-700"]};
  }

  .input-wrap:not(:nth-of-type(1)) {
    margin-top: 1rem;
  }

  input {
    background-color: #fff;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.color["gray-300"]};
    padding: 0.5rem 0.5rem;
    font-size: 0.8rem;
    width: calc(100% - 1rem);

    ${media.pc} {
      width: calc(100% - 2rem);
      display: block;
      border-radius: 0.375rem;
      font-size: 1rem;
      border: 1px solid ${({ theme }) => theme.color["gray-300"]};
      padding: 0.75rem 1rem;
    }

    ${media.tablet} {
      width: calc(100% - 2rem);
      display: block;
      border-radius: 0.375rem;
      font-size: 1rem;
      border: 1px solid ${({ theme }) => theme.color["gray-300"]};
      padding: 0.75rem 1rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color["gray-500"]};
    }

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color["indigo-500"]};
    }
  }

  select {
    background-color: #fff;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.color["gray-300"]};
    padding: 0.5rem 0.5rem;
    font-size: 0.8rem;

    ${media.tablet} {
      background-color: #fff;
      border-radius: 0.375rem;
      border: 1px solid ${({ theme }) => theme.color["gray-300"]};
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }

    ${media.pc} {
      background-color: #fff;
      border-radius: 0.375rem;
      border: 1px solid ${({ theme }) => theme.color["gray-300"]};
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color["gray-500"]};
    }

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color["indigo-500"]};
    }
  }

  textarea {
    width: calc(100% - 2rem);
    font-size: 0.8rem;
    display: block;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.color["gray-300"]};
    padding: 0.75rem 1rem;
    height: 10rem;
    resize: none;

    ${media.pc} {
      border: 1px solid red;
      width: calc(100% - 2rem);
      font-size: 1rem;
      display: block;
      border-radius: 0.375rem;
      border: 1px solid ${({ theme }) => theme.color["gray-300"]};
      padding: 0.75rem 1rem;
      height: 10rem;
      resize: none;
    }

    ${media.tablet} {
      width: calc(100% - 2rem);
      font-size: 1rem;
      display: block;
      border-radius: 0.375rem;
      border: 1px solid ${({ theme }) => theme.color["gray-300"]};
      padding: 0.75rem 1rem;
      height: 10rem;
      resize: none;
      border: 1px solid red;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color["gray-500"]};
    }

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color["indigo-500"]};
    }
  }

  .actions-wrap {
    padding-left: 2rem;
    text-align: right;
  }

  .registration__btn {
    margin-top: 1rem;

    ${media["fix-mobile"]} {
      padding: initial;
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;
