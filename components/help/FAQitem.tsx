import React, { useState, useRef } from "react";
import * as S from "./style/style-FAQItem";
import { IoIosArrowDown } from "react-icons/io";

interface PropsType {
  title: string;
  content: string;
}

const FAQitem = (props: PropsType) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsClosed] = useState(false);

  const handleClickQuestion = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsClosed((prevState) => !prevState);
  };

  return (
    <S.FAQCItemcontainer>
      <S.TitleWrapper onClick={handleClickQuestion} isOpen={isOpen}>
        <h3>
          <span>Q. </span> {props.title}
        </h3>
        <button>
          <IoIosArrowDown className="icon" />
        </button>
      </S.TitleWrapper>
      <S.ContentWrapper ref={parentRef}>
        <div ref={childRef}>
          <span>A. </span>
          {props.content}
        </div>
      </S.ContentWrapper>
    </S.FAQCItemcontainer>
  );
};

export default FAQitem;
