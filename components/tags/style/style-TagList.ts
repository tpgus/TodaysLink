import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagListContainer = styled.ul`
  position: fixed;
  left: 0;
  top: 5rem;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  overflow: scroll;
  padding: 0.7rem 1rem;
  background-color: ${({ theme }) => theme.color["gray-100"]};

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.pc} {
    justify-content: center;
    height: 2rem;
    top: 6.8rem;
  }
`;
