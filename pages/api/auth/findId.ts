import Joi from "joi";
import { db } from "../../../lib/firestore";
import { emailSchema } from "../../../utils/common-utils";
import { collection, query, where, getDocs } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;

    //서버측 이메일 유효성 검사
    const validationSchema = Joi.object({ email: emailSchema });
    const { error } = validationSchema.validate({ email });
    if (error) {
      res.status(422).json({ message: "이메일 형식이 올바르지 않습니다." });
    }

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        res
          .status(200)
          .json({ message: "등록되지 않은 이메일입니다.", userId: null });
      } else {
        const { userId } = querySnapshot.docs[0].data();
        res.status(200).json({ message: "조회 성공", userId });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default handler;
