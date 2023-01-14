import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ListContainer = styled.div`
  padding: 0 5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    padding-bottom: 1rem;

    ${media.tablet} {
      font-size: 2rem;
      font-weight: 400;
      padding-bottom: 1rem;
    }
  }
`;
