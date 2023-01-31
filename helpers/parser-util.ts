import { WithId, Document } from "mongodb";
import type { EventListType } from "../types/commonType";

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
