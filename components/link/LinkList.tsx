import * as S from "./style/style-LinkList";
import { v4 as uuidv4 } from "uuid";
import LinkItem from "./LinkItem";
import Button from "../ui/Button";
import type { LinkListType } from "../../types/commonType";

interface PropsType {
  linkList: LinkListType;
}

const LinkList = (props: PropsType) => {
  return (
    <>
      <S.LinkListContainer>
        <div className="grid-container">
          {props.linkList.map((link) => (
            <LinkItem key={uuidv4()} linkItem={link} />
          ))}
        </div>
      </S.LinkListContainer>
      <S.MoreButtonContainer>
        <Button onClick={() => alert("더 보기 클릭")}>
          더 보기&nbsp;
          <span>1/3</span>
        </Button>
      </S.MoreButtonContainer>
    </>
  );
};

export default LinkList;
