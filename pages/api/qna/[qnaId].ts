import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectDB, findById } from "../../../helpers/db-util";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { qnaId } = req.query;

  let client = null;
  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "DB 연결 실패" });
    return;
  }

  try {
    const myQuestion = await findById(client, "qna", {
      _id: new ObjectId(qnaId as string),
    });
    res.status(200).json({ message: "내 문의 조회 완료", qnaItem: myQuestion });
  } catch (error) {
    res.status(500).json({ message: "내 문의 조회 실패" });
  }
};

export default handler;
