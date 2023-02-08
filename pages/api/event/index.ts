import type { NextApiRequest, NextApiResponse } from "next";

// deprecated
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const pageOffset = req.query.pageOffset as string;

    const rawQueryStrings = req.query;
    delete rawQueryStrings["pageOffset"];

    // const parsedOptions = getParsedOptions(rawQueryStrings);

    try {
      // const eventList = await getEventList(pageOffset, parsedOptions);
      res.status(200).json({
        message: "success",
        // data: eventList.documents,
        // totalLength: eventList.totalLength,
      });
    } catch (error) {
      res.status(500).json({ message: "데이터 조회 실패" });
    }
  }
};
export default handler;
