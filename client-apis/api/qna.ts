import {
  collection,
  addDoc,
  Timestamp,
  getDoc,
  getDocs,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../lib/firestore";
import { QnaType } from "../../types";

export const getQnARef = () => collection(db, "qna");

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
    const qnaRef = getQnARef();
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
    const qnaRef = getQnARef();
    const q = query(qnaRef, orderBy("registeredDate", "desc"));
    const docSanp = await getDocs(q);

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

export const getQnAById = async (id: string) => {
  try {
    const eventRef = getQnARef();
    const docRef = doc(eventRef, id);
    const docSnap = await getDoc(docRef);
    const qna = docSnap.data() as QnaType;
    return qna;
  } catch (error) {
    throw error;
  }
};
