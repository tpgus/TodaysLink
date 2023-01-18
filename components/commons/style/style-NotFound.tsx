import styled from "styled-components";
import { media } from "../../../styles/theme";

export const NotFoundContainer = styled.div`
  padding: 30% 10%;
  background-color: #fff;

  ${media.pc} {
    height: 100vh;
    display: grid;
    place-items: center;
    padding: 0;
    margin-top: -6.8rem;
    //현재 헤더의 높이는 6.8rem이기 때문에 메인 컴포넌트는 기본적으로 padding-top 6.8rem이 붙어 있는 상태
    //이때, 404 페이지는 메인 컴포넌트 안에 들어가지만, 헤더는 보여주지 않는 페이지이기도 함.
    //따라서 NotFound 페이지는 기본적으로 상단으로부터 6.8rem 만큼 떨어져 있는 상태
    //중앙 정렬을 위해 헤더의 높이만큼 다시 -6.8rem
  }

  main {
    ${media.pc} {
      display: flex;
    }

    & > p {
      font-size: 2.25rem;
      line-height: 2.5rem;
      font-weight: bold;
      letter-spacing: -0.025em;
      color: ${({ theme }) => theme.color.dark};
      ${media.pc} {
        font-size: 3rem;
        line-height: 1;
      }
    }

    & > div {
      ${media.pc} {
        margin-left: 1.5rem;
      }
    }
  }

  .message {
    ${media.pc} {
      border-left: 2px solid gray;
      border-color: rgb(229 231 235);
      padding-left: 1.5rem;
    }

    h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      font-weight: bold;
      letter-spacing: -0.025em;
      color: ${({ theme }) => theme.color.dark};
      ${media.pc} {
        font-size: 3rem;
        line-height: 1;
      }
    }

    p {
      margin-top: 0.25rem;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.color["gray-500"]};
    }
  }

  .actions {
    margin-top: 2.5rem;
    display: flex;

    ${media.pc} {
      padding-left: 1.5rem;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    border: transparent;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    :focus {
      outline: none;
    }

    :nth-of-type(1) {
      color: #fff;
      background-color: ${({ theme }) => theme.color.dark};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      :hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }

    :nth-of-type(2) {
      margin-left: 1rem;
      background-color: ${({ theme }) => theme.color["gray-500"]};
      color: ${({ theme }) => theme.color["gray-200"]};
      :hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
