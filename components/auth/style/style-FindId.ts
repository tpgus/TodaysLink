import styled from "styled-components";

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
    margin-top: 20%;
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

  button {
    margin-top: 2rem;
    display: block;
    width: 100%;
  }
`;
