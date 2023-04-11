import * as S from "./style/style-TagList";
import Tag from "./Tag";
import React, { useState, useCallback } from "react";
import { setTag } from "../../store/searchOptionSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../store";
import type { TagType } from "../../types";

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
  const tagState = useAppSelector((state) => state.searchOption.tags);

  const currentTagIdx = TAGS.indexOf(tagState);
  const dispatch = useAppDispatch();

  const handleClickTag = useCallback((idx: number) => {
    dispatch(setTag(TAGS[idx] as TagType));
  }, []);

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

export default React.memo(TagList);
