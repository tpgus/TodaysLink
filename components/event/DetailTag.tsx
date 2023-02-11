import * as S from "./style/style-DetailTag";

interface PropsType {
  tag: string;
}

const EventDetailTag = (props: PropsType) => {
  return <S.TagContainer>{props.tag}</S.TagContainer>;
};

export default EventDetailTag;
