import styled from "styled-components";
import { media } from "../../../styles/theme";

export const Main = styled.div`
  margin: 0 auto;

  ${media["fix-mobile"]} {
    padding-top: 5rem;
  }

  ${media.pc} {
    /* 헤더의 높이가 총 6.8rem 위 아래 패딩+height */
    padding-top: 6.8rem;
  }
`;
