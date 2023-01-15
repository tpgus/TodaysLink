import React from "react";
import * as S from "./style/style-QnAList";

const QnA = () => {
  return (
    <S.ListContainer>
      <div className="qna-header">
        <div className="title-wrap">
          <h1>1:1 문의 (Q&A)</h1>
        </div>
        <div className="btn-wrap">
          <button>문의하기</button>
        </div>
      </div>
      <S.Table>
        <table>
          <thead>
            <tr>
              <th className="th-status">상태</th>
              <th className="th-type pc-tablet-only">문의 유형</th>
              <th className="th-content">문의 내용</th>
              <th className="th-date pc-tablet-only">작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"tb-row"}>
              <td className="td-status">답변 대기</td>
              <td className="td-type pc-tablet-only">사이트 이용</td>
              <td className="td-content">어떤 사이트인가요?</td>
              <td className="td-date pc-tablet-only">2023.01.15</td>
            </tr>
            <tr className={"tb-row"}>
              <td className="td-status">답변 대기</td>
              <td className="td-type pc-tablet-only">사이트 이용</td>
              <td className="td-content">어떤 사이트인가요?</td>
              <td className="td-date pc-tablet-only">2023.01.15</td>
            </tr>
          </tbody>
        </table>
      </S.Table>
    </S.ListContainer>
  );
};

export default QnA;
