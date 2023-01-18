import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagContainer = styled.li<{ activated: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20rem;
  min-width: 4rem;
  font-size: 0.8rem;
  font-weight: ${({ activated }) => (activated ? "bold" : "500")};
  padding: 0.4rem 0.4rem;
  line-height: 1rem;
  background-color: ${({ activated }) => (activated ? "#000" : "#fff")};
  color: ${({ activated, theme }) => (activated ? "#fff" : theme.color.dark)};
  margin: 0 0.2rem;
  cursor: pointer;

  :nth-of-type(1) {
    margin-left: 1rem;
  }
  :nth-last-child(1) {
    margin-right: 1rem;
  }

  ${media.pc} {
    padding: 0 0.5rem;
    line-height: 2rem;
    margin: 0 0.3rem;
    border: transparent;
  }
`;
