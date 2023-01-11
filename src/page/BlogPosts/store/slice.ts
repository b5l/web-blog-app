import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogPosts: {
    data: [];
    isFetching: boolean;
  };
}

export const initialState: ISliceState = {
  blogPosts: {
    data: [],
    isFetching: false,
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
