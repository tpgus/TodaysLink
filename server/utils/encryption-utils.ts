//서버측 인증과 관련된 utils
import { hash, compare } from "bcryptjs";

export const hashPassword = async (password: string) => {
  // 두번 째 인자는 암호화 정도(수준) -> 높을 수록 높은 수준의 암호화 -> but, 속도는 느려짐
  //낮을 수록 낮은 수준의 암호화 -> 속도는 빠름
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  const isValid = await compare(plainPassword, hashedPassword);
  return isValid;
};
