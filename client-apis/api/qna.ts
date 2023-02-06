import {
  collection,
  addDoc,
  Timestamp,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../../helpers/firestore";
import { QnaType } from "../../types";

export const getRef = () => collection(db, "qna");

export const createQnA = async (qna: any) => {
  const { type, title, content } = qna;
  const newQnA = {
    type,
    title,
    content,
    answer: null,
    userId: null,
    registeredDate: Timestamp.fromDate(new Date(Date.now())),
    answeredDate: null,
    resolved: false,
  };

  try {
    const qnaRef = getRef();
    const addedDocument = await addDoc(qnaRef, newQnA);
    const docRef = doc(qnaRef, addedDocument.id);
    const docSnap = await getDoc(docRef);
    const createdQnA: QnaType = {
      ...(docSnap.data() as QnaType),
      id: docSnap.id,
    };
    return { message: "success", createdQnA };
  } catch (error) {
    throw error;
  }
};

export const getQnAList = async () => {
  try {
    const qnaRef = getRef();
    const docSanp = await getDocs(qnaRef);

    const qnaList: QnaType[] = [];
    docSanp.forEach((doc) => {
      qnaList.push({
        ...(doc.data() as QnaType),
        id: doc.id,
      });
    });

    return { message: "success", qnaList };
  } catch (error) {
    throw error;
  }
};
