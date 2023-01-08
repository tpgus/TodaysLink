import { TagContainer } from "./style/style-Tag";

interface PropsType {
  tag: string;
}

const Tag = (props: PropsType) => {
  return <TagContainer>{props.tag}</TagContainer>;
};

export default Tag;
