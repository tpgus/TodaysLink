import styled from "styled-components";
import { media } from "../../../styles/theme";

export const Button = styled.button`
  margin: 0.4rem;
  border-radius: 0.375rem;
  border: transparent;
  padding: 0.3rem 0.75rem;
  background-color: ${({ theme }) => theme.color["indigo-500"]};
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: white;

  &:hover {
    background-color: rgba(117, 119, 243, 0.8);
  }

  ${media.pc} {
    padding: 0.7rem 1rem;
    font-size: 1rem;
  }
`;
