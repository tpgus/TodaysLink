import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ModalContainer = styled.div`
  width: 80%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.375rem;

  ${media.pc} {
    width: 30%;
    padding: 2rem 3rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding: 0.2rem 0;
    font-size: 0.8rem;
    ${media.pc} {
      font-size: 0.9rem;
    }
  }

  span {
    flex: 1;
    line-height: 20px;
    color: #767676;
  }

  p {
    flex: 3;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #e5e5e5;
    ${media.pc} {
      font-size: 0.9rem;
      flex: 5;
    }

    ${media["galaxy-fold"]} {
      flex: 2;
    }
  }

  .answer {
    display: flex;
    align-items: baseline;
  }

  .answer__span {
    color: ${({ theme }) => theme.color["indigo-600"]};
    line-height: 2.5rem;
  }

  .answer__p {
    padding-right: 2rem;
    height: auto;
    max-height: 10rem;
    border: 1px solid red;
    line-height: 2.5rem;
    border: transparent;
    white-space: normal;
    overflow-y: auto;

    ${media.pc} {
      height: auto;
      max-height: 20rem;
    }
  }

  .close {
    display: flex;
    justify-content: flex-end;
  }

  button {
    ${media["fix-mobile"]} {
      padding: 0.5rem;
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
