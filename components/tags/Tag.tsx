import * as S from "./style/style-Tag";

interface PropsType {
  tag: string;
  activated: boolean;
  clickHandler: React.MouseEventHandler<HTMLLIElement>;
}

const Tag = (props: PropsType) => {
  return (
    <S.TagContainer activated={props.activated} onClick={props.clickHandler}>
      {props.tag}
    </S.TagContainer>
  );
};

export default Tag;
