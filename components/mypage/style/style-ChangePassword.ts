import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ChangePasswordLayout = styled.div`
  ${media.pc} {
    max-width: 65%;
    margin: 0 auto;
  }
`;

export const ChangePasswordContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color["gray-100"]};

  ${media.pc} {
    width: 50%;
    height: calc(100vh - 6.8rem);
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;

    ${media.pc} {
      font-size: 2.5rem;
      padding: 4rem 0;
    }
  }

  form {
    text-align: center;
    height: 100%;

    ${media.pc} {
      padding: 5rem 0;
    }
  }

  .form__div {
    width: 100%;
    padding: 0.5rem 0;
  }

  label {
    text-align: right;
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color["gray-700"]};
    margin: 1rem;
    position: relative;
    padding: 0 0.5rem;
    width: 15%;
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
