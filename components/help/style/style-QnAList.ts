import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ListContainer = styled.div`
  width: 90%;
  max-width: 90%;
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
  width: 100%;
  max-width: 100%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border: 1px solid rgba(167, 164, 164, 0.5);

  table {
    display: block;
    border-top-width: 1px;
    border-bottom-width: 0px;
    border-color: rgb(209 213 219);
  }

  tr {
    width: 100%;
    max-width: 100%;
    display: flex;
  }

  thead {
    display: block;
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
    padding: 0.75rem 1rem;
  }

  .th-status {
    flex: 1;
  }
  .th-type {
    flex: 1;
  }

  .th-title {
    flex: 6;
    ${media["fix-mobile"]} {
      flex: 3;
    }
  }

  .th-date {
    flex: 1;
  }

  .th-lock {
    flex: 0.5;
  }

  .tb-row {
    cursor: pointer;
    :hover {
      background-color: rgba(167, 164, 164, 0.1);
    }
  }

  tbody {
    display: block;
  }

  td {
    padding: 0.75rem 1rem;
    white-space: nowrap;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .td-status {
    flex: 1;
    font-size: 600;
    color: ${({ theme }) => theme.color["gray-900"]};
  }

  .emphasis {
    font-weight: bold;
  }

  .td-type {
    flex: 1;
    color: ${({ theme }) => theme.color["gray-500"]};
  }

  .td-title {
    flex: 6;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.color["gray-500"]};
    ${media["fix-mobile"]} {
      flex: 3;
    }
  }

  .td-date {
    flex: 1;
    color: ${({ theme }) => theme.color["gray-500"]};
  }

  .td-lock {
    flex: 0.5;
  }
`;

export const NoData = styled.div`
  margin: auto auto;
  text-align: center;
  padding: 1rem 0;
  p {
    font-weight: bold;
    font-size: 1rem;
  }
`;
