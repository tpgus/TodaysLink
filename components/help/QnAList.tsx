import React from "react";
import { ListContainer } from "./style/style-QnAList";

const QnA = () => {
  return (
    <ListContainer>
      <thead>
        <tr>
          <th>상태</th>
          <th>문의 유형</th>
          <th>문의 내용</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>상태</td>
          <td>문의 유형</td>
          <td>문의 내용</td>
          <td>작성일</td>
        </tr>
      </tbody>
    </ListContainer>
  );
};

export default QnA;
