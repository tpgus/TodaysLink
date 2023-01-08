import styled from "styled-components";
import { media } from "../../../styles/theme";

export const Main = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 6.5rem;
  ${media.pc} {
    max-width: 75rem;
  }
`;
