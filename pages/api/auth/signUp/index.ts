import Joi from "joi";
import { db } from "../../../../lib/firestore";
import { hashPassword } from "../../../../server/utils/encryption-utils";
import { addDoc, collection } from "firebase/firestore";
import {
  idSchema,
  emailSchema,
  passwordSchema,
} from "../../../../utils/common-utils";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { userId, password, email } = req.body;

    //서버측 유효성 검사
    const validationSchema = Joi.object({
      userId: idSchema,
      password: passwordSchema,
      email: emailSchema,
    });

    const { error } = validationSchema.validate({ userId, password, email });
    if (error) {
      res.status(422).json({
        message: "아이디, 비밀번호, 이메일을 확인해 주세요",
      });
    }

    try {
      const usersRef = collection(db, "users");
      const hashedPassword = await hashPassword(password);
      const result = await addDoc(usersRef, {
        userId,
        password: hashedPassword,
        email,
      });
      res.status(201).json({ message: "success", createdUserId: result.id });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default handler;
