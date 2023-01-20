export interface LinkItemType {
  id: number;
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

export type LinkListType = LinkItemType[];

export interface FaqType {
  question: string;
  answer: string;
}

export type FaqListType = FaqType[];
