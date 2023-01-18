import styled from "styled-components";

interface PropsType {
  isClicked: boolean;
}

export const MenuContainer = styled.ul<PropsType>`
  /* 헤더에서 불러오고 있으므로 부모가 헤더이다  : nav-wrapper*/
  position: fixed;
  color: #fff;
  top: 0;
  right: ${({ isClicked }) => (isClicked ? "0" : "-50vw")};
  width: 50vw;
  height: 100%;
  z-index: 11;
  background-color: #fff;
  color: ${({ theme }) => theme.color["gray-600"]};
  padding-top: 5rem;
  text-align: center;
  transition: all 0.6s;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    font-weight: 500;
  }

  span {
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
