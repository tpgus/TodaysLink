import styled from "styled-components";

export const FAQCItemcontainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
  }
`;

export const TitleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding: 1.5rem 1rem;
  cursor: pointer;

  button {
    border: transparent;
    background-color: transparent;
    font-size: 1rem;
  }

  .icon {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "")};
  }
`;

export const ContentWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;

  div {
    background-color: ${({ theme }) => theme.color["gray-200"]};
    padding: 1rem 2rem;
    line-height: 2rem;
  }
`;
