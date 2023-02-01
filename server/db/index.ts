import { MongoClient, Db } from "mongodb";

let db: Db | null = null;

export const connectDB = async () => {
  //이미 연결된 경우, 새로 연결하지 않는다.
  if (db) {
    return db;
  }

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER}.40qmpum.mongodb.net?retryWrites=true&w=majority&maxPoolSize=200`
  );
  db = client.db(process.env.DB_NAME);

  return db;
};

//이전의 connectDB 함수에서는 client만 다루고
//client를 반환하고 함수를 호출하는 곳에서
//const db = client.db(process.env.DB_NAME)처럼 사용

// let client: MongoClient | null = null;

// export const connectDB = async () => {
//   //이미 연결된 경우 새로 연결하지 않는다.
//   if (client) {
//     return client;
//   }

//   try {
//     client = await MongoClient.connect(
//       `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER}.40qmpum.mongodb.net?retryWrites=true&w=majority&maxPoolSize=200`
//     );
//   } catch (error) {
//     throw new Error("DB연결 실패");
//   }

//   return client;
// };
