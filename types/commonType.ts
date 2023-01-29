import { ObjectId } from "mongodb";

export interface EventType {
  _id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  announcementDate: Date;
  image: string;
  tags: string[];
  url: string;
  warnings: string[];
  numOfWinner: number;
}

export interface FaqType {
  question: string;
  answer: string;
}

export interface QnaType {
  _id: ObjectId | null;
  type: string;
  title: string;
  content: string;
  userId: string;
  answer: string | null;
  registeredDate: Date;
  answeredDate: Date | null;
  resolved: boolean;
}

export interface SearchOptionType {
  searchValue: string;
  tags: string;
  flatform: string;
  numOfWinner: string;
}
export type EventListType = EventType[];

export type FaqListType = FaqType[];
