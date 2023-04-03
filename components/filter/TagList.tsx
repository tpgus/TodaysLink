import * as S from "./style/style-TagList";
import Tag from "./Tag";
import { useState } from "react";
import { setTag } from "../../store/searchOptionSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../store";
import type { TAG } from "../../types";

const TAGS = [
  "전부 보기",
  "오늘 마감",
  "전자기기",
  "기프티콘",
  "상품권",
  "의류",
  "식품",
  "설문 조사",
  "댓글",
  "출석 체크",
  "공유 & 초대",
];

const TagList = () => {
  const tagState = useAppSelector((state) => state.searchOption);

  const currentTagIdx = TAGS.indexOf(tagState.tags);
  const dispatch = useAppDispatch();

  const handleClickTag = (idx: number) => {
    console.log(TAGS[idx]);
    dispatch(setTag(TAGS[idx] as TAG));
  };

  return (
    <S.TagListContainer>
      {TAGS.map((tag, idx) => (
        <Tag
          key={uuidv4()}
          tag={tag}
          activated={idx === currentTagIdx}
          clickHandler={() => handleClickTag(idx)}
        />
      ))}
    </S.TagListContainer>
  );
};

export default TagList;
