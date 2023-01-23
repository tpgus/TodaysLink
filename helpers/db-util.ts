import { MongoClient } from "mongodb";
import type { Document, Sort } from "mongodb";

type CollectionType = "qna" | "test"; //컬렉션 종류
const DB_NAME = `${process.env.DB_NAME}`;

export const connectDB = async () => {
  console.log(process.env.DB_NAME);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PWD);
  console.log(process.env.DB_CLUSTER);
  //
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER}.40qmpum.mongodb.net?retryWrites=true&w=majority`
  );
  return client;
};

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

export const updateData = async () => {};
export const deleteData = async () => {};
