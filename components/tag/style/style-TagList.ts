import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  overflow: scroll;
  /* max-width: 75rem; */

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.pc} {
    margin: 0.5rem auto;
  }
`;
