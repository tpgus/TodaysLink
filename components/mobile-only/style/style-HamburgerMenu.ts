import styled from "styled-components";

export const MenuContainer = styled.ul<{
  isClicked: boolean;
  screenHeight: number;
}>`
  /* 헤더에서 불러오고 있으므로 부모가 헤더이다  : nav-wrapper*/
  position: fixed;
  color: white;
  top: 0;
  right: ${({ isClicked }) => (isClicked ? "0" : "-50vw")};
  width: 50vw;
  height: ${({ screenHeight }) => screenHeight - 80 + "px"};
  z-index: 11;
  background-color: ${({ theme }) => theme.color["indigo-600"]};
  padding-top: 5rem;
  text-align: center;
  transition: all 0.6s;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    font-weight: 500;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  li p {
    width: 40%;
  }
`;

export const Backrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;
