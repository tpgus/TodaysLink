import styled from "styled-components";
import { media } from "../../../styles/theme";

export const Button = styled.button<{ bg?: string; disabled?: boolean }>`
  border-radius: 0.375rem;
  border: transparent;
  padding: 0.7rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ theme, bg, disabled }) =>
    disabled ? "#dedede" : bg || theme.color.dark};

  ${media.pc} {
    padding: 0.7rem 1rem;
    font-size: 1rem;
  }
`;
