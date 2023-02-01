import { Db, MongoError, ObjectId } from "mongodb";
import { connectDB } from "../db";

export const getEventById = async (id: string) => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("DB연결 실패");
  }

  const document = await db
    .collection("event")
    .find({ _id: new ObjectId(id) })
    .toArray();

  return document;
};

export const getEventList = async (pageOffset?: string, filter?: Object) => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("DB연결 실패");
  }
  const offset = pageOffset ? parseInt(pageOffset) : 0;

  const documents = await db
    .collection("event")
    .find(filter || {})
    .limit(12)
    .skip(offset)
    .toArray();

  const totalLength = await db.collection("event").countDocuments(filter || {});
  return { documents, totalLength };
};

export const getEventIds = async () => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("DB연결 실패");
  }

  const ids = await db
    .collection("event")
    .find()
    .limit(12)
    .project({ _id: 1 })
    .toArray();

  return ids;
};
