import { Document, Db, ObjectId } from "mongodb";
import { connectDB } from "../db";

export const getQnaList = async () => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("DB연결 실패");
  }

  const documents = await db
    .collection("qna")
    .find()
    .sort({ _id: -1 })
    .toArray();
  return documents;
};

export const insertQna = async (document: Document) => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("DB연결 실패");
  }

  const result = await db.collection("qna").insertOne(document);
  return result;
};

export const getQnaById = async (id: string) => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("DB연결 실패");
  }

  const qna = await db
    .collection("qna")
    .find({ _id: new ObjectId(id) })
    .toArray();

  return qna[0];
};
