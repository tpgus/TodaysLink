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

/*
기존 : 다른 검색 옵션(당첨자 수, 플랫폼)이 변경될 때, 선택된 Tag는 변하지 않지만, 
부모 컴포넌트의 재렌더링으로 인해 TagList 컴포넌트 또한 재렌더링이 발생

개선 : React.memo를 통해 부모로부터 전달받는 props가 변경되지 않을 경우 TagList 컴포넌트는
재렌더링 하지 않는다.
*/
