import { getEventList } from "../../../server/controller/eventController";
import { getParsedOptions } from "../../../server/helpers/parser-utils";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const pageOffset = req.query.pageOffset as string;

    const rawQueryStrings = req.query;
    delete rawQueryStrings["pageOffset"];

    const parsedOptions = getParsedOptions(rawQueryStrings);

    try {
      const eventList = await getEventList(pageOffset, parsedOptions);
      res.status(200).json({
        message: "success",
        data: eventList.documents,
        totalLength: eventList.totalLength,
      });
    } catch (error) {
      res.status(500).json({ message: "데이터 조회 실패" });
    }
  }
};
export default handler;

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   let client: MongoClient | null = null;
//   try {
//     client = await connectDB();
//   } catch (error) {
//     res.status(500).json({ message: "DB 연결 실패" });
//     return;
//   }

//   if (req.method === "GET") {
//     const { pageOffset } = req.query;
//     const queries = req.query;
//     delete queries["pageOffset"];

//     const options: Partial<{ [key: string]: string | string[] }> = {};

//     for (const key in queries) {
//       if (queries[key] === "전부 보기") {
//         continue;
//       }
//       if (queries[key]) {
//         options[key] = queries[key];
//         if (key === "platforms") {
//           options[key] = (options[key] as string).split(",");
//         }
//       }
//     }
//     console.log(options);

//     try {
//       const eventList = await getLimitedData(client, "event", {
//         limit: 12,
//         skip: Number(pageOffset),
//         filter: options as Partial<SearchOptionType>,
//       });
//       res.status(200).json({ message: "success", data: eventList });
//     } catch (error) {
//       res.status(500).json({ message: "데이터 조회 실패" });
//     }
//   }
// };
