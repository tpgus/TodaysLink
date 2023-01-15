import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ListContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 90%;

  ${media.tablet} {
    padding: 1.5rem;
  }

  ${media.pc} {
    padding: 2rem;
  }

  h1 {
    font-size: 1.5rem;

    ${media.pc} {
      font-size: 2.5rem;
      font-weight: 500;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }

    ${media.tablet} {
      font-size: 2rem;
      font-weight: 400;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }
  }
`;
