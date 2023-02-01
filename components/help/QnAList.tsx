import * as S from "./style/style-QnAList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Pagination from "../common/Pagination";
import QnAItem from "./QnAItem";
import type { QnaType } from "../../types";

interface PropsType {
  qnaList: QnaType[];
  isLoading: boolean;
}

const itemsPerPage = 10;

const QnAList = (props: PropsType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const firstItemIdxOfPage = (currentPage - 1) * itemsPerPage;

  const qnaList = props.qnaList
    .slice(firstItemIdxOfPage, firstItemIdxOfPage + itemsPerPage)
    .map((qna) => <QnAItem qna={qna} key={uuidv4()} />);

  return (
    <S.ListContainer>
      <S.Table>
        <table>
          <thead>
            <tr>
              <th className="th-status">상태</th>
              <th className="th-type pc-tablet-only">문의 유형</th>
              <th className="th-title">문의 내용</th>
              <th className="th-date pc-tablet-only">작성일</th>
            </tr>
          </thead>
          {qnaList}
        </table>
        {props.qnaList.length === 0 ? (
          <S.NoData>문의 내역이 존재하지 않습니다.</S.NoData>
        ) : null}
      </S.Table>
      <Pagination
        lengthOfItems={props.qnaList.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </S.ListContainer>
  );
};

export default QnAList;
