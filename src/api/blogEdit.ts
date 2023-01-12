import axios from "./axiosClient";
import { FETCH_BLOG_POST_URL } from "../utils/api-config";

export const fetchBlogEditApiCall = (payload: {
  id: number;
  title?: string;
  type?: string;
  description?: string;
}) => {
  const { id, title, type, description } = payload;
  return axios
    .put(FETCH_BLOG_POST_URL(id), {
      id,
      title,
      type,
      description,
    })
    .then()
    .catch((error) => {
      return error;
    });
};
