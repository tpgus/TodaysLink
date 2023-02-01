import type { Db, MongoError } from "mongodb";
import { connectDB } from "../db";

export const getEventList = async (pageOffset?: string, filter?: Object) => {
  let db: Db | null = null;

  try {
    db = await connectDB();
  } catch (error) {
    throw new Error("에러");
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
