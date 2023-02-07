import { Timestamp } from "firebase/firestore";

export interface EventType {
  id: string;
  title: string;
  description: string;
  startDate: Timestamp;
  endDate: Timestamp;
  announcementDate: Timestamp;
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
  id: string;
  type: string;
  title: string;
  content: string;
  userId: string;
  answer: string | null;
  registeredDate: Timestamp;
  answeredDate: Timestamp | null;
  resolved: boolean;
}

export interface SearchOptionType {
  searchValue: string;
  tags: string;
  platforms: string[] | string;
  numOfWinner: number;
}

export type EventListType = EventType[];

export type FaqListType = FaqType[];
