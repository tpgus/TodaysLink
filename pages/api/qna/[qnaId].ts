import { NextApiRequest, NextApiResponse } from "next";
// import { getQnaById } from "../../../server/controller/qnaController";

// deprecated
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { qnaId } = req.query;
  try {
    // const myQuestion = await getQnaById(qnaId as string);
    res.status(200).json({ message: "내 문의 조회 완료" });
  } catch (error) {
    res.status(500).json({ message: "내 문의 조회 실패" });
  }
};

export default handler;
