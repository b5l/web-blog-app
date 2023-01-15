import axios from "./axiosClient";
import { FETCH_SIGN_UP_URL } from "../utils/api-config";

export const fetchSignUpApiCall = (payload: {
  username: string;
  password: string;
}) => {
  const { username, password } = payload;
  return axios
    .post(FETCH_SIGN_UP_URL(), { username, password })
    .then()
    .catch((error) => {
      return error;
    });
};
