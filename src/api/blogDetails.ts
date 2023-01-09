import { FETCH_BLOG_DETAILS_URL } from "../utils/api-config";
import axios from "./axiosClient";

export const fetchBlogDetailsApiCall = (payload: { id: number }) => {
  const { id } = payload;
  return axios.get(FETCH_BLOG_DETAILS_URL(id));
};
