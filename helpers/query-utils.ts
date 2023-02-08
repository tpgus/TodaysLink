import { where } from "firebase/firestore";
import type { SearchOptionType } from "../types";
import type { QueryFieldFilterConstraint } from "firebase/firestore";

export const fieldOptionBuilder = async (options: SearchOptionType) => {
  const tagsOption =
    options.tags === "전부 보기"
      ? where("tags", "array-contains-any", [
          "전자기기",
          "상품권",
          "오늘마감",
          "기프티콘",
          "의류",
          "식품",
          "설문 조사",
          "댓글",
          "출석 체크",
          "공유 & 초대",
        ])
      : where("tags", "array-contains", options.tags);

  const winnerOption =
    options.numOfWinner === 1
      ? [where("numOfWinner", ">=", 1), where("numOfWinner", "<", 50)]
      : [where("numOfWinner", ">=", options.numOfWinner)];

  const platformOption = where("platform", "==", options.platform);

  let fieldOptions: QueryFieldFilterConstraint[] = [];

  if (options.platform) {
    fieldOptions = [tagsOption, platformOption, ...winnerOption];
  } else {
    fieldOptions = [tagsOption, ...winnerOption];
  }

  return fieldOptions;
};
