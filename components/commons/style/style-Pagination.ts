import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ButtonContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  ${media.pc} {
    margin-top: 3rem;
  }

  .active {
    border: 1px solid #000;
    color: #000;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;

  ${media.pc} {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }
`;
