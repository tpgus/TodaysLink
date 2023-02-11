import * as S from "./style/style-DetailTagList";
import { v4 as uuidv4 } from "uuid";
import DetailTag from "./DetailTag";

interface PropsType {
  tags: string[];
}

const DetailTagList = (props: PropsType) => {
  return (
    <S.TagListContainer>
      {props.tags.map((tag) => (
        <DetailTag key={uuidv4()} tag={tag} />
      ))}
    </S.TagListContainer>
  );
};

export default DetailTagList;
