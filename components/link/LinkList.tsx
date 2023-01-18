import * as S from "./style/style-LinkList";
import LinkItem from "./LinkItem";
import Button from "../ui/Button";

const LinkList = () => {
  return (
    <>
      <S.LinkListContainer>
        <div className="grid-container">
          <LinkItem />
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
