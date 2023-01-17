import styled from "styled-components";
import { media } from "../../../styles/theme";

export const SearchContainer = styled.div`
  width: 60%;

  ${media.pc} {
    width: 30%;
  }

  ${media.tablet} {
    width: 40%;
  }

  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 0.3rem 0.75rem;
  border-radius: 10rem;

  input {
    width: 100%;

    ${media.pc} {
      width: 100%;
      font-size: 1rem;
    }

    display: inline-block;
    border-radius: 10rem;
    border: none;
    text-align: left;
    color: rgba(0, 0, 0, 0.7);

    &:focus {
      border-color: transparent;
      outline: none;
    }
  }

  button {
    ${media.pc} {
      padding: 0.5rem 1rem;
      width: 3rem;
    }

    display: inline-block;
    background-color: transparent;
    border: none;
  }
`;
