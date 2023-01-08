import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    Accept: "application/json",
  },
});

export default instance;

export const { CancelToken } = axios;
