import LinkItem from "./LinkItem";
import { LinkListContainer } from "./style/style-LinkList";

const LinkList = () => {
  return (
    <LinkListContainer>
      <div className="grid-container">
        <LinkItem />
      </div>
    </LinkListContainer>
  );
};

export default LinkList;
