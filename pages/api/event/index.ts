import { connectDB, getLimitedData } from "../../../helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";
import type { MongoClient } from "mongodb";
import { SearchOptionType } from "../../../types/commonType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client: MongoClient | null = null;
  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "DB 연결 실패" });
    return;
  }

  if (req.method === "GET") {
    const { offset } = req.query;
    const options: { [key: string]: string } = {};
    for (const key in req.query) {
      if (req.query[key]) {
        if (req.query["tags"] === "전부 보기" || key === "offset") continue;
        options[key] = req.query[key] as string;
      }
    }

    try {
      //컬렉션 이름 event로 수정
      const eventList = await getLimitedData(client, "event", {
        limit: 4,
        skip: Number(offset),
        filter: options as Partial<SearchOptionType>,
      });
      res.status(200).json({ message: "success", data: eventList });
    } catch (error) {
      res.status(500).json({ message: "데이터 조회 실패" });
    }
  }
};

export default handler;
