import styled from "styled-components";
import { media } from "../../../styles/theme";

export const SidebarContainer = styled.div`
  ${media.pc} {
    position: fixed;
    top: 6.8rem; // 헤더 높이
    left: 0;
    width: calc(((100% - 75rem) / 2)); // 메인 컨텐츠가 차지하는 공간 / 2
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
  }
  @media (max-width: 1750px) {
    display: none;
  }

  .filter-wrap {
    border-top: 1px solid ${({ theme }) => theme.color["gray-200"]};
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  legend {
    width: 100%;
    text-align: center;
  }
  span {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.dark};
  }
  button {
    border: transparent;
    font-weight: 500;
    color: #000;
    border-radius: 0.2rem;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.color["gray-200"]};
    display: inline-flex;
    ${media["fix-mobile"]} {
      display: none;
    }
  }
`;

export const FilterContainer = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: center;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin-top: 0.5rem;
  input {
    height: 1rem;
    width: 1rem;
    border-radius: 0.25rem;
    accent-color: #000;
  }
  label {
    margin-left: 0.3rem;
    color: ${({ theme }) => theme.color["gray-500"]};
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;
