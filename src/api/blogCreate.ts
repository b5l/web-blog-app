import axios from "./axiosClient";
import { FETCH_BLOG_CREATE_URL } from "../utils/api-config";

export const fetchBlogCreateApiCall = (payload: {
  title: string;
  shortDescription: string;
  longDescription: string;
}) => {
  const { title, shortDescription, longDescription } = payload;
  return axios
    .post(FETCH_BLOG_CREATE_URL(), { title, shortDescription, longDescription })
    .then()
    .catch((error) => {
      return error;
    });
};
