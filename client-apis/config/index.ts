import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.databaseURL;
export const baseURL: AxiosInstance = axios.create({ baseURL: BASE_URL });
