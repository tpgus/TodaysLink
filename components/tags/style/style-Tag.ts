import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20rem;
  min-width: 4rem;
  font-weight: 400;
  padding: 0 0.4rem;
  line-height: 1rem;
  background-color: white;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0.2rem;

  ${media.pc} {
    padding: 0 0.5rem;
    line-height: 2rem;
    margin: 0 0.3rem;
    border: transparent;
    font-weight: 500;
    /* font-weight: bold; */
  }
`;
