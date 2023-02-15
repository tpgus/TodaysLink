import { where, Timestamp } from "firebase/firestore";
import type { SearchOptionType } from "../types";
import type { QueryFieldFilterConstraint } from "firebase/firestore";

const dateParser = () => {
  const currentDate = new Date(Date.now());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  return { year, month, day };
};

export const fieldOptionBuilder = async (options: SearchOptionType) => {
  const { year, month, day } = dateParser();

  const tagsOption =
    options.tags === "전부 보기"
      ? [
          where("tags", "array-contains-any", [
            "전자기기",
            "상품권",
            "기프티콘",
            "의류",
            "식품",
            "설문 조사",
            "댓글",
            "출석 체크",
            "공유 & 초대",
          ]),
        ]
      : options.tags === "오늘 마감"
      ? [
          where("endDate.year", "==", year),
          where("endDate.month", "==", month),
          where("endDate.day", "==", day),
        ]
      : [where("tags", "array-contains", options.tags)];

  const winnerOption =
    options.numOfWinner === 1
      ? [where("numOfWinner", ">=", 1), where("numOfWinner", "<", 50)]
      : [where("numOfWinner", ">=", options.numOfWinner)];

  const platformOption = where("platform", "==", options.platform);

  let fieldOptions: QueryFieldFilterConstraint[] = [];

  if (options.platform) {
    fieldOptions = [...tagsOption, platformOption, ...winnerOption];
  } else {
    fieldOptions = [...tagsOption, ...winnerOption];
  }

  return fieldOptions;
};
