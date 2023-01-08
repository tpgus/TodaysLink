import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid rgb(229 231 235);
  background-color: white;
  cursor: pointer;

  &:hover {
    .group {
      opacity: 0.6;
    }
  }

  .img-wrapper {
    aspect-ratio: 1/1;
    width: 100%;
    background-color: rgb(229 231 235);
    height: 20rem;

    ${media.pc} {
      aspect-ratio: 3/4;
      width: 100%;
      height: 23rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  .link-detail {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 0.5rem;
    padding: 1rem;

    h3 {
      font-weight: 500;
      color: rgb(17 24 39);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgb(107 114 128);
    }

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: end;

      & > p {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-style: italic;
        color: rgb(107 114 128);
        -webkit-line-clamp: 2;
      }

      p:nth-of-type(2) {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: rgb(17 24 39);
      }
    }
  }
`;
