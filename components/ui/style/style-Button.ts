import styled from "styled-components";
import { media } from "../../../styles/theme";

export const Button = styled.button`
  margin-right: 1rem;
  border-radius: 0.375rem;
  border: transparent;
  padding: 0.3rem 0.75rem;
  background-color: white;
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: black;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${media.pc} {
    padding: 0.7rem 1rem;
    font-size: 1rem;
  }
`;
