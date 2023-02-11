import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagListContainer = styled.ul`
  ${media["fix-mobile"]} {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;
