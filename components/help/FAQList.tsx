import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Pagination from "../common/Pagination";
import FAQitem from "./FAQitem";
import * as S from "./style/style-FAQList";
import type { FaqListType } from "../../types/commonType";

interface PropsType {
  faqList: FaqListType;
}

const itemsPerPage = 9;

const FAQList = (props: PropsType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const fisrtItemIdxOfPage = (currentPage - 1) * itemsPerPage;

  const faqList = props.faqList
    .slice(fisrtItemIdxOfPage, fisrtItemIdxOfPage + itemsPerPage)
    .map((faq) => (
      <FAQitem key={uuidv4()} question={faq.question} answer={faq.answer} />
    ));

  return (
    <S.FAQListLayout>
      <h1>자주 묻는 질문</h1>
      <S.FAQListContainer>{faqList}</S.FAQListContainer>
      <Pagination
        lengthOfItems={props.faqList.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </S.FAQListLayout>
  );
};

export default FAQList;
