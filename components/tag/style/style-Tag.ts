import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30rem;
  border: 1px solid rgb(200 200 229);
  line-height: 1.5rem;
  min-width: 4rem;
  font-weight: 500;
  color: rgb(30 64 175);
  background-color: rgba(229, 231, 235, 0.4);
  margin: 0 0.1rem;

  ${media.pc} {
    font-size: 1srem; /* 14px */
    padding: 0.25rem 0.75rem;
    border-radius: 30rem;
    line-height: 2rem;
    margin: 0 0.2rem;
  }
`;
