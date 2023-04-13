import * as S from "./style/style-TagList";
import Tag from "./Tag";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TagType } from "../../types";

const TAGS = [
  "전부 보기",
  "오늘 마감",
  "전자기기",
  "기프티콘",
  "상품권",
  "식품",
  "설문 조사",
  "댓글",
  "출석 체크",
  "공유",
];

interface PropsType {
  currentTag: TagType;
  onChangeTag: Dispatch<SetStateAction<TagType>>;
}

const TagList = (props: PropsType) => {
  const currentTagIdx = TAGS.indexOf(props.currentTag);

  const handleClickTag = useCallback((idx: number) => {
    const currentTag = TAGS[idx];
    props.onChangeTag(currentTag as TagType);
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
