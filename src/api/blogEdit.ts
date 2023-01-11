import axios from "./axiosClient";
import { FETCH_BLOG_EDIT_URL } from "../utils/api-config";

export const fetchBlogEditApiCall = (payload: {
  id: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
}) => {
  const { id, title, shortDescription, longDescription } = payload;
  return axios
    .put(FETCH_BLOG_EDIT_URL(), {
      id,
      title,
      shortDescription,
      longDescription,
    })
    .then()
    .catch((error) => {
      return error;
    });
};
