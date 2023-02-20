import styled from "styled-components";
import { media } from "../../../styles/theme";

export const FindIdLayout = styled.div`
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

  label {
    ${media["galaxy-fold"]} {
      font-size: 0.8rem;
    }
  }

  form {
    margin-top: 20%;
    width: 80%;
  }

  div {
    width: 100%;
  }

  input {
    margin-top: 1rem;
    width: calc(100% - 1.5rem);
    height: 1.5rem;
  }

  .result {
    margin-top: 1rem;
  }

  .positive {
    color: #49c1ff;
  }

  .userId {
    color: #000;
  }

  .negative {
    color: #ff0000;
  }

  .actions {
    display: flex;
  }

  .actions-btn {
    border: transparent;
    background-color: transparent;
    color: ${({ theme }) => theme.color["gray-400"]};
  }

  .findPassword__btn {
    margin-left: 0.5rem;
    border-left: 2px solid #dfdfdf;
    padding-left: 0.5rem;
  }

  button {
    margin-top: 2rem;
    display: block;
    width: 100%;
  }
`;
