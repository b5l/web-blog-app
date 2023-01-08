import { FETCH_BLOG_POSTS_URL } from "../utils/api-config";
import axios from "./axiosClient";

export const fetchBlogPostsApiCall = () => {
  return axios.get(FETCH_BLOG_POSTS_URL());
};
