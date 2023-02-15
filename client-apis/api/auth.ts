import axios from "axios";

interface CreateUserParams {
  userId: string;
  password: string;
  email: string;
}
interface FindPwdParams {
  userId: string;
  email: string;
}

export const checkDuplicateId = async (id: string) => {
  const response = await axios.post("/api/auth/signUp/checkId", { userId: id });
  return response.data;
};

export const verifyEmail = async (email: string) => {
  const response = await axios.post("/api/auth/signUp/verifyEmail", {
    email,
  });
  return response.data;
};

export const createUser = async (userInfo: CreateUserParams) => {
  const response = await axios.post("/api/auth/signUp", userInfo);
  return response.data;
};

export const findId = async (email: string) => {
  const response = await axios.post("/api/auth/findId", { email });
  return response.data;
};

export const findPassword = async (enteredInfo: FindPwdParams) => {
  const response = await axios.post("/api/auth/findPassword", {
    userId: enteredInfo.userId,
    email: enteredInfo.email,
  });
  return response.data;
};
