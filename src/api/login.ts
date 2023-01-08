import axios from "./axiosClient";
import { FETCH_LOGIN_URL } from "../utils/api-config";
import { setLoginState } from "../page/Login/store/slice";
import { put } from "redux-saga/effects";

export function fetchLoginApiCall(payload: {
  username: string;
  password: string;
}) {
  const { username, password } = payload;
  return axios
    .post(
      FETCH_LOGIN_URL(),
      { username, password },
      {
        headers: { "content-type": "application/json" },
      }
    )
    .then()
    .catch((error) => {
      return error;
    });
}
