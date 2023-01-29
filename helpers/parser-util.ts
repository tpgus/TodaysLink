import { WithId, Document } from "mongodb";
import type { LinkListType } from "../types/commonType";

export const linkListParser = (linkList: WithId<Document>[]): LinkListType => {
  return linkList.map((item) => ({
    _id: item._id.toString(),
    title: item.title,
    description: item.description,
    startDate: item.startDate.toString(),
    endDate: item.startDate.toString(),
    announcementDate: item.startDate.toString(),
    image: item.image,
    tag: item.tag,
    url: item.url,
    warnings: item.warnings,
    numOfWinner: item.numOfWinner,
  }));
};
