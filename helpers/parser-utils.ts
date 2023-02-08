import { Timestamp } from "firebase/firestore";

export const dateParser = (date: Timestamp | Date) => {
  return new Date(date.toString()).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
