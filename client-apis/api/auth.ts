import axios from "axios";

interface UserInfo {
  id: string;
  password: string;
  email: string;
}
export const checkId = async (id: string) => {
  const response = await axios.post("/api/auth/signUp/checkId", { userId: id });
  return response.data;
};

export const verifyEmail = async (email: string) => {};

export const createUser = async (userInfo: UserInfo) => {
  const response = await axios.post("/api/auth/signUp", userInfo);
  return response.data;
};
