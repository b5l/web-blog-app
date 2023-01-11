import axios from "./axiosClient";
import { FETCH_BLOG_CREATE_URL } from "../utils/api-config";

export const fetchBlogCreateApiCall = (payload: {
  title: string;
  type: string;
  description: string;
}) => {
  const { title, type, description } = payload;
  return axios
    .post(FETCH_BLOG_CREATE_URL(), { title, type, description })
    .then()
    .catch((error) => {
      return error;
    });
};
