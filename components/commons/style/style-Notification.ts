import styled from "styled-components";
import { media } from "../../../styles/theme";

export const NotificationContainer = styled.div<{ isPositive: boolean }>`
  border-radius: 0.375rem; /* 6px */
  background-color: ${({ isPositive }) =>
    isPositive ? "#f0fdf4" : "rgb(254 242 242)"};
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  display: flex;
  padding: 1rem;
  color: ${({ isPositive }) => (isPositive ? "#276749" : "rgb(153 27 27)")};
  font-weight: 500;

  ${media["fix-mobile"]} {
    width: 60%;
    justify-content: center;
  }

  .icon-wrap {
    height: 1.25rem;
    width: 1.25rem;
  }

  .check-icon {
    color: ${({ isPositive }) =>
      isPositive ? "rgb(74 222 128)" : "rgb(248 113 113)"};
  }

  p {
    margin-left: 0.5rem;
  }
`;
