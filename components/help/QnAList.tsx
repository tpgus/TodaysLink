import * as S from "./style/style-QnAList";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingSpinner from "../common/LoadingSpinner";
import { useState, useEffect } from "react";
import Pagination from "../common/Pagination";
import QnAItem from "./QnAItem";
import type { QnaType } from "../../types/commonType";
import axios from "axios";

const itemsPerPage = 10;

const QnAList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const firstItemIdxOfPage = (currentPage - 1) * itemsPerPage;

  const [aqnaList, setQnaList] = useState<QnaType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get<QnaType[]>("/api/qna").then((data) => {
      setIsLoading(false);
      setQnaList(data.data);
    });
  }, []);

  useEffect(() => {
    console.log(aqnaList);
  }, [aqnaList]);

  return (
    <S.ListContainer>
      {isLoading ? <LoadingSpinner /> : null}
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
        </table>
      </S.Table>
      <Pagination
        lengthOfItems={10}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </S.ListContainer>
  );
};

export default QnAList;
