import { createSlice } from "@reduxjs/toolkit";
import { blogPostsType } from "../../../types/types";

interface ISliceState {
  blogPosts: {
    data: blogPostsType[];
  };
}

export const initialState: ISliceState = {
  blogPosts: {
    data: [],
  },
};

const blogPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {
    setBlogPostsState: (state, action) => {
      state.blogPosts = { ...state.blogPosts, ...action.payload };
    },
    fetchBlogPostsAction: (state, action) => {
      state.blogPosts = { ...state.blogPosts, ...action.payload };
    },
  },
});

export const { setBlogPostsState, fetchBlogPostsAction } =
  blogPostsSlice.actions;

export default blogPostsSlice.reducer;
