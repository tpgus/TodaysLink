import * as S from "./style/style-TagList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tag from "./Tag";

const TAGS = [
  "전부 보기",
  "오늘 마감",
  "전자기기",
  "기프티콘",
  "상품권",
  "현금",
  "의류",
  "식품",
  "설문 조사",
  "댓글",
  "출석 체크",
  "공유 & 초대",
];

const TagList = () => {
  const [clickedTagIdx, setClickedTagIdx] = useState(0);

  const handleClickTag = (index: number) => {
    setClickedTagIdx(index);
  };

  return (
    <S.TagListContainer>
      {TAGS.map((tag, idx) => (
        <Tag
          key={uuidv4()}
          tag={tag}
          activated={idx === clickedTagIdx}
          clickHandler={() => handleClickTag(idx)}
        />
      ))}
    </S.TagListContainer>
  );
};

export default TagList;
