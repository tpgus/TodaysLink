import Joi from "joi";
import { db } from "../../../../lib/firestore";
import { idSchema } from "../../../../utils/common-utils";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { userId } = req.body;

    //서버측 id 유효성 검사
    const validationSchema = Joi.object({ userId: idSchema });
    const { error } = validationSchema.validate({ userId });
    if (error) {
      res.status(422).json({ message: "아이디를 확인해 주세요" });
    }

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      let isExistsId = true;
      if (querySnapshot.empty) {
        isExistsId = false;
      }

      res.status(200).json({ message: "success", isExistsId });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default handler;
