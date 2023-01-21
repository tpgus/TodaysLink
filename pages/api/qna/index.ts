import { connectDB, insertData, getAllData } from "../../../helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client = null;

  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "데이터베이스 연결 실패" });
    return;
  }

  //POST
  if (req.method === "POST") {
    const { title, content } = req.body;
    const newQuestion = { title, content };

    try {
      const result = await insertData(client, "qna", newQuestion);
      //_id 추가 구문 작성
      res
        .status(201)
        .json({ message: "문의 등록 완료", question: newQuestion });
    } catch (error) {
      res.status(500).json({ message: "문의 등록 실패" });
    }
  }
  //GET
  else if (req.method === "GET") {
    try {
      const result = await getAllData(client, "qna");
      res.status(200).json({ message: "내 문의 조회 완료", questions: result });
    } catch (error) {
      res.status(500).json({ message: "내 문의 조회 실패" });
    }
  }
  client.close();
};

//get 요청은 find().toArray() 해줘야 함
//최신 게시물 ? 필터 조건 sort({_id:-1})

export default handler;
