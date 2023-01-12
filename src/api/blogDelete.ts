import { FETCH_BLOG_POST_URL } from "../utils/api-config";
import axios from "./axiosClient";

export const fetchBlogDeleteApiCall = (payload: { id: number }) => {
  const { id } = payload;
  return axios.delete(FETCH_BLOG_POST_URL(id));
};
