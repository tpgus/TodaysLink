import { connectDB, getLimitedData } from "../../../helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";
import type { MongoClient } from "mongodb";

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
    try {
      const linkList = await getLimitedData(client, "link", {
        limit: 12,
        skip: Number(offset),
      });
      res.status(200).json({ message: "success", linkList });
    } catch (error) {
      res.status(500).json({ message: "데이터 조회 실패" });
    }
  }
};

export default handler;
