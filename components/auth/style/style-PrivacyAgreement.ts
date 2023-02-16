import styled from "styled-components";
import { media } from "../../../styles/theme";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 70%;
  height: 60%;
  left: 50%;
  top: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  background-color: #fff;
  padding: 2rem 1.5rem;

  ${media.pc} {
    width: 40%;
  }

  .title {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }

  .content {
    padding: 1rem 0;
  }

  .actions {
    padding: 2rem 0 0 0;
    text-align: center;
  }
`;
