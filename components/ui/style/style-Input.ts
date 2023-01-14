import styled from "styled-components";

export const Input = styled.input`
  appearance: none;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.color["gray-300"]};
  padding: 0.5rem 0.75rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:focus {
    border: 2px solid ${({ theme }) => theme.color["indigo-600"]};
    height: calc(1.5rem - 2px);
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color["gray-400"]};
  }
`;
