import styled from "styled-components";
import { media } from "../../../styles/theme";

export const EventDetailLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`;

export const EventDetailContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  ${media.pc} {
    flex-direction: row;
  }

  ${media.tablet} {
    align-items: center;
    margin-top: 5%;
  }
`;

export const ImageTagContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 70%;
    margin-top: 5rem;
  }
  ${media.pc} {
    width: calc(640px - 6rem);
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  }

  .img {
    ${media["fix-mobile"]} {
      padding: 2rem;
      width: 50%;
      height: 30%;
    }
  }
`;

export const InfoContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  width: 80%;

  ${media["fix-mobile"]} {
    font-size: 0.8rem;
  }

  ${media.pc} {
    position: absolute;
    right: 0;
    width: 50%;
  }

  ${media.tablet} {
    width: 70%;
    position: unset;
    margin-top: 3rem;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 3rem;
    left: 0;
    bottom: 0;
    border-left: 1px solid #ebebeb;
  }

  .info__div {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 2rem;
  }

  .info__div--header {
    ${media.pc} {
      position: sticky;
      padding-top: 3rem;
      top: 6.8rem;
      background-color: #fff;
      z-index: 1;
    }

    ${media.tablet} {
      position: unset;
    }
  }

  .item-title {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .item-subTitle {
    color: #aaa;
    margin-top: 0.3rem;
    line-height: 1.2rem;
  }

  .actions {
    margin-top: 2rem;
    background-color: #fff;
    display: flex;
    align-items: center;
  }

  .actions__link {
    display: block;
    border-radius: 0.375rem;
    border: transparent;
    padding: 0.7rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
    background-color: ${({ theme }) => theme.color.dark};
    width: 50%;
    margin-right: 2rem;
    ${media["fix-mobile"]} {
      padding: unset;
      padding: 0.5rem 0.5rem;
      font-size: 0.8rem;
    }
    ${media.pc} {
      padding: 0.7rem 1rem;
      font-size: 1rem;
    }
  }

  .actions__btn {
    display: block;
    width: 50%;
    ${media["fix-mobile"]} {
      padding: unset;
      padding: 0.5rem 0.5rem;
      font-size: 0.8rem;
    }
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

  .content {
    line-height: 2rem;
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
