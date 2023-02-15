import styled from "styled-components";

export const FindPasswordLayout = styled.div`
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

  form {
    margin-top: 15%;
    width: 80%;
  }

  div {
    width: 100%;
    margin-top: 1rem;
  }

  input {
    margin-top: 0.3rem;
    width: calc(100% - 1.5rem);
    height: 1.5rem;
  }

  .message {
    padding-top: 0.5rem;
  }

  .positive {
    color: #49c1ff;
  }

  .negative {
    color: #ff0000;
  }

  button {
    margin-top: 2rem;
    display: block;
    width: 100%;
  }
`;
