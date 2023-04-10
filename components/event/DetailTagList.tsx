import * as S from "./style/style-DetailTagList";
import DetailTag from "./DetailTag";
import { v4 as uuidv4 } from "uuid";

interface PropsType {
  tags: string[];
}

const DetailTagList = (props: PropsType) => {
  ("컴포넌트 DetailTagList.tsx 렌더링");
  return (
    <S.TagListContainer>
      {props.tags.map((tag) => (
        <DetailTag key={uuidv4()} tag={tag} />
      ))}
    </S.TagListContainer>
  );
};

export default DetailTagList;
