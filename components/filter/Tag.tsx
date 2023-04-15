import * as S from "./style/style-Tag";

interface PropsType {
  tag: string;
  activated: boolean;
}

const Tag = (props: PropsType) => {
  return (
    <S.TagContainer activated={props.activated}>{props.tag}</S.TagContainer>
  );
};

export default Tag;
