import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import type { Document, Sort } from "mongodb";

type CollectionType = "qna" | "link"; //컬렉션 종류

interface ParamsType<T> {
  client: MongoClient;
  collection: CollectionType;
  options?: T;
}

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
  collection: CollectionType
) => {
  const db = client.db(DB_NAME);
  const documents = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();

  return documents;
};

export const findById = async (
  client: MongoClient,
  collection: CollectionType,
  id: { _id: ObjectId }
) => {
  const db = client.db(DB_NAME);
  const documents = await db.collection(collection).find(id).toArray();
  return documents[0];
};

export const getLimitedData = async (
  client: MongoClient,
  collection: CollectionType,
  options: { limit: number; skip: number }
) => {
  const db = client.db(DB_NAME);
  const documents = await db
    .collection(collection)
    .find()
    .limit(options.limit)
    .skip(options.skip)
    .toArray();
  return documents;
};

export const getCountOfDocuments = async <T>(params: ParamsType<T>) => {
  const { client, collection } = params;
  const db = client.db(DB_NAME);
  const count = await db!.collection(collection).estimatedDocumentCount();
  //문서의 갯수를 세는 방법으로 countDocuments와 estimatedDocumentCount가 있는데
  //estimatedDocumentCount가 더 빠르다.
  //https://www.mongodb.com/docs/drivers/node/current/usage-examples/count/
  return count;
};

export const updateData = async () => {};
export const deleteData = async () => {};
