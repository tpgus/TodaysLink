import React from "react";
import { ListContainer } from "./style/style-FAQList";
import FAQitem from "./FAQitem";
const FAQList = () => {
  return (
    <ListContainer>
      <h1>자주 묻는 질문</h1>
      <FAQitem
        title={"이 사이트는 누가 만든 것 인가요?"}
        content={
          "제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다.제가 만들었습니다."
        }
      />
    </ListContainer>
  );
};

export default FAQList;
