import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
  border: 1px solid blue;
`;

export const Main = styled.div`
  margin: 0 auto;
  max-width: 75rem;
`;

export const SideMenuContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 20%;
`;

export const SideMenu = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  width: 70%;
  border: 1px solid lightgray;

  h2 {
    background-color: ${({ theme }) => theme.color["gray-400"]};
    color: #fff;
    width: 100%;
    padding: 0.7rem 0;
    font-weight: 500;
    font-size: 1.3rem;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    display: flex;
    align-items: center;
    height: 2.5rem;
    text-align: center;
    padding-left: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.color["gray-100"]};
    }

    &:not(:nth-of-type(1)) {
      border-top: 1px solid lightgray;
    }
  }
`;

export const AdBanner = styled.div`
  position: fixed;
  width: 20%;
  border: 1px solid green;
  right: 0;
`;
