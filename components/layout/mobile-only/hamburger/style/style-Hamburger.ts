import styled from "styled-components";

export const HamburgerContainer = styled.div<{ isClicked: boolean }>`
  position: relative;
  height: 1.1rem;
  width: 1.5rem;
  cursor: pointer;

  div {
    position: absolute;
    z-index: 15;
    width: 100%;
    height: 2px;
    background-color: ${({ isClicked, theme }) =>
      isClicked ? theme.color["gray-600"] : "#fff"};
    border-radius: 10rem;
    transition: all 0.35s;
  }

  div:nth-of-type(1) {
    /* top:0 */
    ${({ isClicked }) =>
      isClicked ? "top:50%;transform:translateY(-50%) rotate(45deg)" : "top:0"}
  }

  div:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    display: ${({ isClicked }) => (isClicked ? "none" : "block")};
  }

  div:nth-of-type(3) {
    /* bottom: 0; */
    ${({ isClicked }) =>
      isClicked
        ? "bottom:50%;transform:translateY(50%) rotate(-45deg)"
        : "bottom:0"}
  }
`;
