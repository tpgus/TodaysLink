import LinkItem from "./LinkItem";
import { LinkListContainer, MoreButtonContainer } from "./style/style-LinkList";
import Button from "../ui/Button";

const LinkList = () => {
  return (
    <>
      <LinkListContainer>
        <div className="grid-container">
          <LinkItem />
        </div>
      </LinkListContainer>
      <MoreButtonContainer>
        <Button className="btn-more" onClick={() => alert("더 보기 클릭")}>
          더 보기&nbsp;
          <span>1/3</span>
        </Button>
      </MoreButtonContainer>
    </>
  );
};

export default LinkList;
