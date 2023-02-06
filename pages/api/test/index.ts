import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { userInput } = req.body; // {userInput:xxx}

  if (req.method === "POST") {
    res.status(201).json({ message: "success", data: "a" });

    res.status(500).json({ message: "fail" });
  }
};

export default handler;
