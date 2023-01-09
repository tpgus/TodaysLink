import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  overflow: scroll;
  padding: 0.7rem 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.pc} {
    margin: 0.5rem auto;
    max-width: 75rem;
    padding: 0.5rem 1rem;
  }
`;
