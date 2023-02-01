import { connectDB, insertData, getAllData } from "../../../helpers/db-util";
import { QnaType } from "../../../types";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client = null;
  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "DB 연결 실패" });
    return;
  }

  //POST
  if (req.method === "POST") {
    const { type, title, content } = req.body;
    const question: QnaType = {
      _id: null,
      type,
      title,
      content,
      userId: "", //유저 아이디 추가
      answer: null,
      registeredDate: new Date(Date.now()),
      answeredDate: null,
      resolved: false,
    };

    try {
      const result = await insertData(client!, "qna", question);
      const createdQuestion: QnaType = {
        ...question,
        _id: result.insertedId,
      };

      res
        .status(201)
        .json({ message: "문의 등록 완료", question: createdQuestion });
    } catch (error) {
      res.status(500).json({ message: "문의 등록 실패" });
    }
  }

  //GET
  else if (req.method === "GET") {
    try {
      const myQuestion = await getAllData(client!, "qna");
      res
        .status(200)
        .json({ message: "내 문의 조회 완료", qnaList: myQuestion });
    } catch (error) {
      res.status(500).json({ message: "내 문의 조회 실패" });
    }
  }
};

export default handler;
