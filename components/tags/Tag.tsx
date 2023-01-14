import { TagContainer } from "./style/style-Tag";

interface PropsType {
  tag: string;
  activated: boolean;
  clickHandler: React.MouseEventHandler<HTMLLIElement>;
}

const Tag = (props: PropsType) => {
  return (
    <TagContainer activated={props.activated} onClick={props.clickHandler}>
      {props.tag}
    </TagContainer>
  );
};

export default Tag;
