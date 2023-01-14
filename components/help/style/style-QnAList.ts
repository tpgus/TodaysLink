import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ListContainer = styled.table`
  border: 1px solid red;

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

export const Table = styled.div`
  width: 100%;
  border: 1px solid lightgray;
`;
