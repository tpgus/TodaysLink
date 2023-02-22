import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;

  nav {
    background-color: ${({ theme }) => theme.color.dark};
    padding: 0 1rem;
    margin: 0 auto;
    height: 5rem;

    ${media.pc} {
      padding: 0.4rem 4rem;
      height: 6rem;
    }
    ${media.tablet} {
      padding: 0 2rem;
    }
  }

  .nav-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }

  .nav__link {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }

    ${media.tablet} {
      font-size: 1.1rem;
    }
  }

  .active {
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 3px solid #fff;
    padding-bottom: 0.4rem;
  }

  .pc-tablet__ul {
    display: none;
    ${media.pc} {
      display: flex;
    }
    ${media.tablet} {
      display: flex;
    }
  }

  .pc-tablet__li:not(:nth-of-type(1)) {
    margin-left: 1.2rem;
  }
`;
