import styled from "styled-components";
import { media } from "../../../styles/theme";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5rem;

  ${media.tablet} {
    padding-top: 7rem;
  }

  ${media.pc} {
    padding-top: 4rem;
  }
`;

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;

  ${media.tablet} {
    max-width: 70%;
  }
  ${media.pc} {
    max-width: 65%;
  }
`;

export const SideMenuContainer = styled.div`
  top: 25%;
  position: fixed;
  text-align: center;
  width: 20%;
`;

export const SideMenu = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  width: 70%;
  border: 1px solid lightgray;

  h2 {
    background-color: ${({ theme }) => theme.color["gray-400"]};
    color: #fff;
    width: 100%;
    padding: 0.7rem 0;
    font-weight: 500;
    font-size: 1.3rem;
    ${media.tablet} {
      font-size: 0.9rem;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    display: flex;
    align-items: center;
    height: 2.5rem;
    text-align: center;
    padding: 0 1rem;
    justify-content: space-between;
    cursor: pointer;

    ${media.tablet} {
      font-size: 0.7rem;
      font-weight: 400;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color["gray-100"]};
    }

    &:not(:nth-of-type(1)) {
      border-top: 1px solid lightgray;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const AdBanner = styled.div`
  position: fixed;
  width: 20%;
  border: 1px solid green;
  right: 0;
`;
