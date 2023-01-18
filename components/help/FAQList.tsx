import React from "react";
import * as S from "./style/style-FAQList";
import FAQitem from "./FAQitem";
import { v4 as uuidv4 } from "uuid";
import type { FaqListType } from "../../types/commonType";

interface PropsType {
  faqList: FaqListType;
}

const FAQList = (props: PropsType) => {
  return (
    <S.FAQListLayout>
      <h1>자주 묻는 질문</h1>
      <S.FAQListContainer>
        {props.faqList.map((faq) => (
          <FAQitem key={uuidv4()} question={faq.question} answer={faq.answer} />
        ))}
      </S.FAQListContainer>
    </S.FAQListLayout>
  );
};

export default FAQList;
