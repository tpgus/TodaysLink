import axios, { AxiosInstance } from "axios";

const BASE_URL = "/api";
export const baseURL: AxiosInstance = axios.create({ baseURL: BASE_URL });
