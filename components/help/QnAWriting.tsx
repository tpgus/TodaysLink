import React from "react";
import Button from "../ui/Button";
import * as S from "./style/style-QnAWriting";

const QnAWriting = () => {
  const handleSubmit = () => {};

  return (
    <S.WritingContainer>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label htmlFor="asd">문의 유형</label>
            <select>
              <option>기타</option>
              <option>사이트 이용</option>
              <option>계정</option>
            </select>
          </div>
          <div className="input-wrap">
            <label>제목</label>
            <input
              placeholder="최대 100자 이내로 작성해 주세요"
              maxLength={100}
            />
          </div>
          <div className="input-wrap">
            <label>문의 내용</label>
            <textarea
              placeholder="최대 500자 이내로 작성해 주세요"
              maxLength={500}
            />
          </div>
          <div className="actions-wrap">
            <Button
              className="registration__btn"
              onClick={() => alert("클릭")}
              type="submit"
            >
              등록하기
            </Button>
          </div>
        </form>
      </div>
    </S.WritingContainer>
  );
};

export default QnAWriting;
