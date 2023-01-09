import styled from "styled-components";
import { media } from "../../../styles/theme";

export const LinkListContainer = styled.ul`
  padding-top: 3rem;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem 0;

    ${media.pc} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 3rem 3rem;
      padding-top: 3rem;
    }
  }
`;
