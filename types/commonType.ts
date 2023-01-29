import { ObjectId } from "mongodb";

export interface LinkItemType {
  _id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  announcementDate: Date;
  image: string;
  tag: string[];
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

export type LinkListType = LinkItemType[];

export type FaqListType = FaqType[];
