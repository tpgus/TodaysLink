import styled from "styled-components";
import { media } from "../../../styles/theme";

export const LinkListContainer = styled.ul`
  .grid-container {
    padding-top: 4.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 0;
    width: 90%;
    margin: 0 auto;

    ${media.pc} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 4rem;
      padding-top: 6rem;
      max-width: 65%;
      /* max-width: 1280px; */
    }

    ${media.tablet} {
      padding-top: 10rem;
      grid-template-columns: 1fr 1fr;
      place-items: center;
    }
  }
`;

export const MoreButtonContainer = styled.div`
  text-align: center;

  button {
    ${media["fix-mobile"]} {
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }

    margin: 3rem 0;
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
