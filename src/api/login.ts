import axios from "./axiosClient";
import { FETCH_LOGIN_URL } from "../utils/api-config";

export const fetchLoginApiCall = (payload: {
  username: string;
  password: string;
}) => {
  const { username, password } = payload;
  return axios
    .post(FETCH_LOGIN_URL(), { username, password })
    .then()
    .catch((error) => {
      return error;
    });
};
