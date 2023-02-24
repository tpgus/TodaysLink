import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 60%;
  height: 20%;
  left: 50%;
  top: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${media.pc} {
    width: 250px;
    height: 150px;
  }

  h2 {
    font-weight: bold;
  }

  .wrap__div {
    margin: 1rem 0;
  }

  .title {
    text-align: center;
  }

  .password {
    text-align: center;
    height: 2rem;
  }

  .password__input {
    ${media["fix-mobile"]} {
      width: 80%;
    }
  }

  .actions {
    text-align: center;
  }

  .cancel {
    background-color: #ff0000;
    color: #fff;
  }

  .confirm {
    background-color: ${({ theme }) => theme.color["gray-300"]};
  }

  .cancel,
  .confirm {
    border: transparent;
    border-radius: 0.3rem;
    margin: 0.1rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
