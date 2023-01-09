import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { media } from "../styles/theme";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <div>
        <main>
          <p>404</p>
          <div>
            <div className="message">
              <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
              <p>Please check the URL in the address bar and try again</p>
            </div>
            <div className="actions">
              <Link href="/">홈으로 이동</Link>
              <Link href="/qna">문의하기</Link>
            </div>
          </div>
        </main>
      </div>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
  padding: 30% 10%;
  background-color: white;
  ${media.pc} {
    height: 100%;
    display: grid;
    place-items: center;
    padding: 0;
  }

  & > div {
    margin: 0 auto;
    max-width: max-content;
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
      /* color: ${({ theme }) => theme.color["indigo-600"]}; */
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
      color: white;
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
