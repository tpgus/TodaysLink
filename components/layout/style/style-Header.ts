import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 10;
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

    .nav-wrapper {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 0;

      a {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;

        &:not(:nth-of-type(1)) {
          margin-left: 1.2rem;
        }
      }

      .active {
        color: #fff;
        border-bottom: 3px solid #fff;
        padding-bottom: 0.4rem;
      }
    }
  }
`;
