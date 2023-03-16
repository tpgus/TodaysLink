import axios, { AxiosInstance } from "axios";

const BASE_URL = "/api/auth";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

interface User {
  userId: string;
  password: string;
}

interface CreateUserParams extends User {
  email: string;
}
interface FindPwdParams extends User {}

interface ChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

export const checkDuplicateId = async (userId: string) => {
  const response = await axiosInstance.post("/signUp/checkId", { userId });
  return response.data;
};

export const verifyEmail = async (email: string) => {
  const response = await axiosInstance.post("/signUp/verifyEmail", {
    email,
  });
  return response.data;
};

export const createUser = async (userInfo: CreateUserParams) => {
  const response = await axiosInstance.post("/signUp", userInfo);
  return response.data;
};

export const findId = async (email: string) => {
  const response = await axiosInstance.post("/findId", { email });
  return response.data;
};

export const findPassword = async (enteredInfo: FindPwdParams) => {
  const response = await axiosInstance.post("/findPassword", enteredInfo);
  return response.data;
};

export const changePassword = async (enteredPassword: ChangePasswordParams) => {
  const response = await axiosInstance.patch(
    "/changePassword",
    enteredPassword
  );
  return response.data;
};
