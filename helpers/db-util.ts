import { MongoClient } from "mongodb";
import type { Document, Sort } from "mongodb";

type CollectionType = "qna" | "test"; //컬렉션 종류
const DB_NAME = `${process.env.db_name}`;

export const connectDB = async () => {
  console.log(process.env.db_cluster);
  console.log(process.env.db_user);
  console.log(process.env.db_pwd);
  console.log(process.env.db_name);
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.db_user}:${process.env.db_pwd}@${process.env.db_cluster}.40qmpum.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
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
