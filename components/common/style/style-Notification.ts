import styled from "styled-components";
import { media } from "../../../styles/theme";

export const NotificationContainer = styled.div<{ isPositive: boolean }>`
  border-radius: 0.375rem;
  background-color: ${({ isPositive }) =>
    isPositive ? "#f0fdf4" : "rgb(254 242 242)"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  padding: 1rem;
  font-weight: 500;
  color: ${({ isPositive }) => (isPositive ? "#276749" : "rgb(153 27 27)")};

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
