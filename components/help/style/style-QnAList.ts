import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ListContainer = styled.div`
  width: 90%;
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;

  ${media.tablet} {
    padding: 1.5rem;
  }
  ${media.pc} {
    padding: 0 2rem;
  }
`;

export const Table = styled.div`
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border: 1px solid rgba(167, 164, 164, 0.5);

  table {
    min-width: 100%;
    border-top-width: 1px;
    border-bottom-width: 0px;
    border-color: rgb(209 213 219);
  }
  thead {
    background-color: ${({ theme }) => theme.color["gray-100"]};
    border-bottom: 1px solid ${({ theme }) => theme.color["gray-200"]};
  }
  th {
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
    color: ${({ theme }) => theme.color["gray-900"]};
  }
  .th-status {
    padding: 1rem 0.75rem 1rem 1rem;
    ${media.tablet} {
      padding-left: 1.5rem;
    }
    ${media.pc} {
      padding-left: 1.5rem;
    }
  }
  .th-type {
    padding: 1rem 0.75rem;
  }
  .th-content {
    padding: 1rem 0.75rem;
  }
  .th-date {
    padding: 1rem 0.75rem;
  }
  .tb-row {
    cursor: pointer;
    :hover {
      /* background-color: rgba(0, 0, 0, 0.1); */
      background-color: rgba(167, 164, 164, 0.1);
    }
  }
  td {
    white-space: nowrap;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .td-status {
    padding: 1rem 0.75rem 1rem 1rem;
    font-size: 500;
    color: ${({ theme }) => theme.color["gray-900"]};
    ${media.tablet} {
      padding-left: 1.5rem;
    }
    ${media.pc} {
      padding-left: 1.5rem;
    }
  }
  .td-type {
    padding: 1rem 0.75rem;
    color: ${({ theme }) => theme.color["gray-500"]};
  }
  .td-content {
    padding: 1rem 0.75rem;
    color: ${({ theme }) => theme.color["gray-500"]};
  }
  .td-date {
    padding: 1rem 0.75rem;
    color: ${({ theme }) => theme.color["gray-500"]};
  }
`;
