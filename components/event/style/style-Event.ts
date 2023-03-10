import styled from "styled-components";
import { media } from "../../../styles/theme";
import { MIXINS } from "../../../styles/theme";

export const EventContainer = styled.div<{ isHover: boolean }>`
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid rgb(229 231 235);
  background-color: #fff;
  cursor: pointer;

  ${media["fix-mobile"]} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${media.pc} {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    transform: ${({ isHover }) => (isHover ? "scale(1.01)" : "")};
    transition: all 0.2s;
  }

  .img-wrap {
    position: relative;
    aspect-ratio: 1/1;
    height: 15rem;
    padding: 1rem;

    ${media.pc} {
      aspect-ratio: 1/1;
      height: 10rem;
    }
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .detail__span {
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    border-radius: 5px;
    width: 80%;
    padding: 0.6rem 0;
    border: transparent;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    text-align: center;
    color: #fff;
    font-weight: 500;
  }

  .info-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 0.5rem;
    padding: 1rem;
  }

  .info-title {
    font-weight: 500;
    color: rgb(17 24 39);
    font-size: 0.875rem;
    line-height: 1.25rem;
    ${MIXINS.lineLimit(2)}
  }

  .info-description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(107, 114, 128, 1);
    ${MIXINS.lineLimit(2)}
  }

  .sub-info {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .sub-info__span {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-style: italic;
    color: rgb(107 114 128);
    -webkit-line-clamp: 2;
  }

  .end-time {
    font-weight: bold;
  }
`;
