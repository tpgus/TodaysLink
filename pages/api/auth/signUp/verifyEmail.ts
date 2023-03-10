import Joi from "joi";
import randomString from "randomstring";
import { db } from "../../../../lib/firestore";
import { emailSchema } from "../../../../utils/common-utils";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  getMailFormat,
  transporter,
} from "../../../../server/utils/mail-utils";
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

      if (!querySnapshot.empty) {
        res.status(422).json({
          message: "이미 사용 중인 이메일입니다.",
        });
      } else {
        //해당 이메일 사용 가능할 경우 인증 코드 6자리 생성
        const verificationCode = randomString.generate({
          length: 6,
          charset: "1234567890",
        });

        await transporter.sendMail({
          from: `"no-reply@TodaysLink Admin" <${"todayslink@naver.com"}>`,
          to: email,
          subject: "[TodaysLink] 이메일 인증을 위한 안내 메일입니다.",
          html: getMailFormat(email, "signUp", verificationCode),
        });
        res.status(200).json({ message: "이메일 전송 완료", verificationCode });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
export default handler;
