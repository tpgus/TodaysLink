import styled from "styled-components";
import { media } from "../../../styles/theme";

export const MyEventHistoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  ${media.tablet} {
    padding-top: 7rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 3rem;
  }
`;

export const MyEventHistoryContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border: 1px solid rgba(167, 164, 164, 0.5);

  ${media.tablet} {
    max-width: 70%;
  }
  ${media.pc} {
    max-width: 60%;
  }

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

  .th-title {
    flex: 4;
    ${media["fix-mobile"]} {
      flex: 3;
    }
  }

  .th-participation-date {
    flex: 2;
  }

  .th-announcement-date {
    flex: 1;
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

  .td-title {
    flex: 4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.color["gray-500"]};
    ${media["fix-mobile"]} {
      flex: 3;
    }
  }

  .td-participation-date {
    flex: 2;
    color: ${({ theme }) => theme.color["gray-500"]};
  }

  .td-announcement-date {
    flex: 1;
    color: ${({ theme }) => theme.color["gray-500"]};
  }

  /* .empty-data__p {
    text-align: center;
    font-weight: bold;
    padding: 1rem;
  } */
`;
