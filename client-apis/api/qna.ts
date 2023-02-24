import { db } from "../../lib/firestore";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";
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
import type { QnaType } from "../../types";

export const getQnARef = () => collection(db, "qna");

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

export const createQnA = async (qna: any) => {
  const { type, title, content, password } = qna;
  let hashedPassword;

  if (password) {
    hashedPassword = await hash(password, 12);
  } else {
    hashedPassword = "";
  }

  const newQnA = {
    type,
    title,
    content,
    answer: null,
    userId: null,
    registeredDate: Timestamp.fromDate(new Date(Date.now())),
    answeredDate: null,
    resolved: false,
    password: hashedPassword,
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

export const getQnAById = async (id: string) => {
  try {
    const qnaRef = getQnARef();
    const docRef = doc(qnaRef, id);
    const docSnap = await getDoc(docRef);
    const qna = docSnap.data() as QnaType;
    return qna;
  } catch (error) {
    throw error;
  }
};

export const checkQnAPassword = async (
  plainPassword: string,
  qnaId: string
) => {
  //이미 getQnAList를 통해 패스워드를 받아올 수 있다.
  //이때 받아온 패스워드로 검사하여 API 요청 횟수를 줄일 것인지?

  //아니면 암호화되긴 했지만, 패스워드 자체를 같이 받아오는 것 자체가 문제이므로
  //패스워드 검사는 따로 매번 API 요청을 하는 게 맞는 것인지? (현재)

  const qna = await getQnAById(qnaId);

  const isValid = await compare(plainPassword, qna.password);
  return isValid;
};
