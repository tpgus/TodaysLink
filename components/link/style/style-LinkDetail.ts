import styled from "styled-components";
import { media } from "../../../styles/theme";

export const LinkDetailLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const LinkDetailContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  ${media.pc} {
    flex-direction: row;
  }

  .img {
    position: fixed;
    top: 9.8rem;
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  padding: 0 2rem;
  right: 0;
  width: 50%;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 3rem;
    left: 0;
    bottom: 0;
    border-left: 1px solid #ebebeb;
  }

  .item-title {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .info__div--header {
    position: sticky;
    padding-top: 3rem;
    top: 6.8rem;
    background-color: #fff;
    z-index: 1;
  }

  .item-description {
    color: #aaa;
    margin-top: 0.2rem;
  }

  .actions {
    margin-top: 2rem;
    background-color: #fff;
    display: flex;
  }

  .info__div {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 2rem;
  }

  .actions__btn {
    display: block;
    width: 40%;
    margin-right: 2rem;
  }

  dl {
    margin-top: 2rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-top: 0.7rem;
  }

  li {
    position: relative;
    padding-left: 1rem;
    margin-top: 0.5rem;
    line-height: 1.3rem;

    ::before {
      content: "";
      position: absolute;
      top: 8px;
      left: 0;
      width: 5px;
      height: 5px;
      background-color: #222;
      border-radius: 100%;
      line-height: 2rem;
    }
  }
`;
