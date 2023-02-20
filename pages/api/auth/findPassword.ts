import Joi from "joi";
import randomString from "randomstring";
import { db } from "../../../lib/firestore";
import { hashPassword } from "../../../server/utils/auth-utils";
import { emailSchema, idSchema } from "../../../utils/common-utils";
import { transporter, getMailFormat } from "../../../server/utils/mail-utils";
import {
  collection,
  where,
  getDocs,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { userId, email } = req.body;

    /* 서버측 아이디, 이메일 유효성 검사 */
    const validationSchema = Joi.object({
      userId: idSchema,
      email: emailSchema,
    });

    const { error } = validationSchema.validate({ userId, email });
    if (error) {
      res
        .status(422)
        .json({ message: "아이디 또는 이메일 형식이 올바르지 않습니다." });
    }
    /* 유효성 검사 끝 */

    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("userId", "==", userId),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        res.status(200).json({
          message: "해당 정보로 등록된 사용자가 없습니다",
          isSuccess: false,
        });
      } else {
        //임시 비밀번호 생성 및 메일 전송
        const temporalPassword =
          randomString.generate(8) +
          randomString.generate({ length: 1, charset: "~!@#$%^&*" });

        await transporter.sendMail({
          from: `no-reply@TodaysLink Admin <todayslink@naver.com>`,
          to: email,
          subject: "[TodaysLink] 임시 비밀번호 안내 메일입니다.",
          html: getMailFormat(email, "findPassword", temporalPassword),
        });

        //기존 비밀번호를 임시 비밀번호로 변경
        const id = querySnapshot.docs[0].id;
        const userRef = doc(db, "users", id);
        const hashedPassword = await hashPassword(temporalPassword);
        await updateDoc(userRef, { password: hashedPassword });

        res.status(200).json({
          message: "임시 비밀번호가 담긴 메일을 전송했습니다.",
          isSuccess: true,
        });
      }
    } catch (error) {
      res.status(500).json({ meesage: "Internal Server Error" });
    }
  }
};

export default handler;
