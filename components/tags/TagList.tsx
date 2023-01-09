import Tag from "./Tag";
import { TagListContainer } from "./style/style-TagList";
import { v4 as uuidv4 } from "uuid";

const Tags = [
  "전부 보기",
  "오늘 마감",
  "전자기기",
  "기프티콘",
  "상품권",
  "현금",
  "의류",
  "식품",
  "설문 조사",
  "출석 체크",
  "공유 & 초대",
];

const TagList = () => {
  return (
    <TagListContainer>
      {Tags.map((tag) => (
        <Tag key={uuidv4()} tag={tag} />
      ))}
    </TagListContainer>
  );
};

export default TagList;
