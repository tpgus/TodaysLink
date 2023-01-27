import { Db, MongoClient, ObjectId } from "mongodb";
import type { Document, Sort } from "mongodb";

type CollectionType = "qna" | "link"; //컬렉션 종류
const DB_NAME = `${process.env.DB_NAME}`;

let client: MongoClient | null;
export const connectDB = async () => {
  if (client) {
    return client;
  }

  client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER}.40qmpum.mongodb.net?retryWrites=true&w=majority&maxPoolSize=200`
  );
  return client;
};
//테스트

export const insertData = async (
  client: MongoClient,
  collection: CollectionType,
  document: Document
) => {
  const db = client.db(DB_NAME);
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllData = async (
  client: MongoClient,
  collection: CollectionType,
  sort: Sort = {}
) => {
  const db = client.db(DB_NAME);
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};

export const findById = async (
  client: MongoClient,
  collection: CollectionType,
  filter: { _id: ObjectId }
) => {
  const db = client.db(DB_NAME);
  const documents = await db.collection(collection).find(filter).toArray();
  return documents[0];
};

export const updateData = async () => {};
export const deleteData = async () => {};
