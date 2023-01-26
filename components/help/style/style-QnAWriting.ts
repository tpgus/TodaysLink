import styled from "styled-components";
import { media } from "../../../styles/theme";

export const WritingContainer = styled.div`
  background-color: ${({ theme }) => theme.color["gray-100"]};

  ${media.tablet} {
    padding: 1rem 0;
  }

  ${media.pc} {
    padding: 1rem;
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
    padding: 0.5rem 0.4rem;
    font-size: 0.6rem;

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
      padding: 0.5rem 1rem;
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

export const QnAHeaderContainer = styled.div`
  width: 90%;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  ${media.tablet} {
    padding: 1.5rem;
  }
  ${media.pc} {
    padding: 2rem;
  }

  .header-wrap {
    ${media.tablet} {
      display: flex;
      align-items: center;
    }
    ${media.pc} {
      display: flex;
      align-items: center;
    }
  }

  .title-wrap {
    flex: 1 1 auto;
  }

  h1 {
    font-size: 1.5rem;
    ${media.pc} {
      font-size: 2.5rem;
      font-weight: 500;
      padding-bottom: 1rem;
    }
    ${media.tablet} {
      font-size: 2rem;
      font-weight: 400;
      padding-bottom: 1rem;
    }
  }
  .btn-wrap {
    margin-top: 1rem;
    ${media.pc} {
      margin-top: 0;
      margin-left: -4rem;
      flex: none;
    }
    ${media.tablet} {
      margin-top: 0;
      margin-left: -4rem;
      flex: none;
    }
  }
  .parent {
    overflow: hidden;
    height: 0;
    margin-top: 1rem;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border: transparent;
    background-color: ${({ theme }) => theme.color.dark};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    padding: 0.75rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #fff;
    ${media["fix-mobile"]} {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
    ${media.pc} {
      width: auto;
    }
    ${media.tablet} {
      width: auto;
    }
  }
`;
