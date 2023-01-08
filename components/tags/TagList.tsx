import Tag from "./Tag";
import { TagListContainer } from "./style/style-TagList";
import { v4 as uuidv4 } from "uuid";

const Tags = [
  "전부보기",
  "전자기기",
  "상품권",
  "식품",
  "의류",
  "현금",
  "전자기기",
  "상품권",
  "식품",
  "의류",
  "현금",
  "상품권",
  "식품",
  "의류",
  "현금",
  "상품권",
  "식품",
  "의류",
  "현금",
  "상품권",
  "식품",
  "의류",
  "현금",
  "상품권",
  "식품",
  "의류",
  "현금",
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
