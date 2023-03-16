import { db } from "../../../lib/firestore";
import { authOptions } from "../../api/auth/[...nextauth]";
import {
  verifyPassword,
  hashPassword,
} from "../../../server/utils/encryption-utils";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

interface UserInfo {
  id: string;
  email: string;
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PATCH") {
    return;
  }

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "인증되지 않은 사용자입니다." });
    }

    const id = session?.user?.id;
    const usersRef = collection(db, "users");
    const userRef = doc(usersRef, id);
    const docSnap = await getDoc(userRef);
    const user = docSnap.data() as UserInfo;

    if (!user) {
      res.status(404).json({ message: "해당 사용자를 찾을 수 없습니다" });
    }

    const currentPassword = user.password;
    const { oldPassword, newPassword } = req.body;

    //입력된 기존 패스워드 검증
    const isValidPassword = await verifyPassword(oldPassword, currentPassword);

    if (!isValidPassword) {
      res.status(403).json({ message: "기존 비밀번호가 틀렸습니다." });
    }
    //403: 클라이언트 오류 상태 : 응답 코드는 서버에 요청이 전달되었지만,
    //권한 때문에 거절되었다는 것을 의미합니다.
    //401 상태는 403과 비슷하지만, 401 Unauthorized의 경우에는 인증이 가능합니다.

    //여기까지 도달했다는 것은 인증은 이미 된 사용자이다(로그인한 유저)
    //하지만 비밀번호를 변경할 권한은 없다. (틀렸으니까) (인증과 인가의 차이)
    //또한 사용자 입력값이 틀렸다는 의미에선 422코드도 가능하다.
    //은행의 계좌개설 - 신분확인 = 인증
    //놀이공원의 티켓 - 누군지 관심x - but, 입장표 있어?(권한) = 인가
    else {
      const hashedPassword = await hashPassword(newPassword);
      await updateDoc(userRef, { password: hashedPassword });
      res.status(200).json({
        message: "패스워드가 변경되었습니다.",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
