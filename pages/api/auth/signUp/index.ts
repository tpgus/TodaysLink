import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../../server/utils/auth-utils";
import { db } from "../../../../lib/firestore";
import Joi from "joi";
import {
  idSchema,
  emailSchema,
  passwordSchema,
} from "../../../../utils/common-utils";
import { addDoc, collection } from "firebase/firestore";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, password, email } = req.body;
  if (req.method === "POST") {
    //서버측 유효성 검사
    const validationSchema = Joi.object({
      userId: idSchema,
      password: passwordSchema,
      email: emailSchema,
    });

    const { error } = validationSchema.validate({ userId, password, email });
    if (error) {
      res.status(422).json({
        message: "Invalid Id, Password or Email",
        createdUserId: null,
      });
      return;
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
      res
        .status(500)
        .json({ message: "Internal Server Error", createdUserId: null });
    }
  }
};

export default handler;
