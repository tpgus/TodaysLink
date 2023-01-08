import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: white;

  nav {
    background-color: ${({ theme }) => theme.color.indigo};
    padding: 0 1rem;
    margin: 0 auto;

    ${media.pc} {
      padding: 0 4rem;
    }

    .nav-wrapper {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 0;
    }
  }
`;

export const Logo = styled.div``;
