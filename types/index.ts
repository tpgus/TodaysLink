import { Timestamp } from "firebase/firestore";

export interface EventDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minites: number;
}

export type PlatformType =
  | "INSTAGRAM"
  | "FACEBOOK"
  | "APP_ONLY"
  | "NAVER"
  | "YOUTUBE"
  | "OFFICIAL_WEB"
  | "ETC"
  | "KAKAO"
  | null;

export type TagType =
  | "전부 보기"
  | "오늘 마감"
  | "전자기기"
  | "기프티콘"
  | "상품권"
  | "의류"
  | "식품"
  | "설문조사"
  | "댓글"
  | "출석 체크"
  | "공유 & 초대";

export interface EventType {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  startDate: EventDate;
  endDate: EventDate;
  announcementDate: EventDate;
  image: string;
  tags: string[];
  url: string;
  warnings: string[];
  numOfWinner: number;
  platform: PlatformType;
  prize: string[];
}

export interface MyEventType extends EventType {
  participationDate: Timestamp;
}

export interface FaqType {
  question: string;
  answer: string;
}

export interface QnaType {
  id: string;
  type: "기타" | "계정" | "사이트 이용";
  title: string;
  content: string;
  userId: string;
  answer: string | null;
  registeredDate: Timestamp;
  answeredDate: Timestamp | null;
  resolved: boolean;
  password: string;
}

export interface SearchOptionType {
  tags: TagType;
  platform: PlatformType;
  numOfWinner: number;
}

export interface UserInfo {
  id: string;
  userId: string;
  password?: string;
  email: string;
}
