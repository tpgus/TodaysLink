import React, { useState, useRef } from "react";
import {
  FAQCItemcontainer,
  TitleWrapper,
  ContentWrapper,
} from "./style/style-FAQItem";
import { IoIosArrowDown } from "react-icons/io";

interface PropsType {
  title: string;
  content: string;
}

const FAQitem = (props: PropsType) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsClosed] = useState(false);

  const clickQuestionHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      //offsetHeight: border 포함
      //clientHeight : 패딩까지만 포함
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsClosed((prevState) => !prevState);
  };

  return (
    <FAQCItemcontainer>
      <TitleWrapper onClick={clickQuestionHandler} isOpen={isOpen}>
        <h3>
          <span>Q. </span> {props.title}
        </h3>
        <button>
          <IoIosArrowDown className="icon" />
        </button>
      </TitleWrapper>
      <ContentWrapper ref={parentRef}>
        <div ref={childRef}>
          <span>A. </span>
          {props.content}
        </div>
      </ContentWrapper>
    </FAQCItemcontainer>
  );
};

export default FAQitem;
