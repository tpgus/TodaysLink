import { connectDB, getLimitedData } from "../../../helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";
import type { MongoClient } from "mongodb";
import { SearchOptionType } from "../../../types/commonType";

interface Test {
  offset: string;
  tag: string;
  flatform: string;
  searchValue: string;
  numOfWinner: string;
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client: MongoClient | null = null;
  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "DB 연결 실패" });
    return;
  }

  if (req.method === "GET") {
    const { offset, tag, flatform, searchValue, numOfWinner } = req.query;
    const options = {};
    console.log(options);
    try {
      //컬렉션 이름 event로 수정
      const eventList = await getLimitedData(client, "link", {
        limit: 12,
        skip: Number(offset),
        filter: options as SearchOptionType,
      });
      res.status(200).json({ message: "success", data: eventList });
    } catch (error) {
      res.status(500).json({ message: "데이터 조회 실패" });
    }
  }
};

export default handler;
