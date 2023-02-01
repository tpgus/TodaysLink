import { WithId, Document } from "mongodb";
import type { EventListType, SearchOptionType } from "../../types";

export const eventListParser = (
  eventList: WithId<Document>[]
): EventListType => {
  return eventList.map((event) => ({
    _id: event._id.toString(),
    title: event.title,
    description: event.description,
    startDate: event.startDate.toString(),
    endDate: event.startDate.toString(),
    announcementDate: event.startDate.toString(),
    image: event.image,
    tags: event.tags,
    url: event.url,
    warnings: event.warnings,
    numOfWinner: event.numOfWinner,
  }));
};

export const getParsedOptions = (
  rawOptions: Partial<{
    [key: string]: string | string[];
  }>
) => {
  const options: { [key: string]: string | Object } = {};

  //오늘 마감, 전자기기, 기프티콘, 상품권, 현금, 의류, 식품, 설문 조사, 댓글, 출석 체크, 공유 & 초대
  if (rawOptions["tags"] && rawOptions["tags"] !== "전부 보기") {
    options["tags"] = rawOptions["tags"];
  }

  //1 50 100 500 1000 99999999(100%)
  if (rawOptions["numOfWinner"]) {
    const numOfWinner = parseInt(rawOptions["numOfWinner"] as string);

    if (rawOptions["numOfWinner"] === "1") {
      options["numOfWinner"] = { $gte: numOfWinner, $lt: 50 };
    } else {
      options["numOfWinner"] = {
        $gte: numOfWinner,
      };
    }
  }

  //'INSTAGRAM' 'FACEBOOK' 'YOUTUBE' 'NAVER' 'APP_ONLY' 'OFFICAL_WEB'
  if (rawOptions["platforms"]) {
    if (rawOptions["platforms"].includes(",")) {
      options["platforms"] = {
        $in: (rawOptions["platforms"] as string).split(","),
      };
    } else {
      options["platforms"] = { $in: [rawOptions["platforms"]] };
    }
  }

  return options;
};
