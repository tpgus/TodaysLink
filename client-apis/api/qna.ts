import { async } from "@firebase/util";
import { setDoc } from "firebase/firestore";
import { db } from "../../helpers/firestore";
import { QnaType } from "../../types";

export const qnaAPI = {
  createQnA: async (qna: QnaType) => {
    return "abc";
    // return response.data;
  },

  readQnA: async () => {},
  updateQna: async () => {},
  deleteQna: async () => {},
};
