import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../lib/firestore";
import { emailSchema, idSchema } from "../../../utils/common-utils";
import { collection, where, getDocs, query } from "firebase/firestore";
import { transporter, getMailFormat } from "../../../server/utils/mail-utils";
import randomString from "randomstring";

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
          success: false,
        });
      } else {
        //임시 비밀번호 생성
        const temporalPassword =
          randomString.generate(8) +
          randomString.generate({ length: 1, charset: "~!@#$%^&*" });
        await transporter.sendMail({
          from: `no-reply@TodaysLink Admin <todayslink@naver.com>`,
          to: email,
          subject: "[TodaysLink] 임시 비밀번호 안내 메일입니다.",
          html: getMailFormat(email, "findPassword", temporalPassword),
        });
        //임시 비밀번호로 변경
        res.status(200).json({
          message: "임시 비밀번호가 담긴 메일을 전송했습니다.",
          success: true,
        });
      }
    } catch (error) {
      res.status(500).json({ meesage: "Internal Server Error" });
    }
  }
};

export default handler;
