import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogDelete: {
    id: number;
    isDeleted: boolean;
  };
}

export const initialState: ISliceState = {
  blogDelete: {
    id: 0,
    isDeleted: false,
  },
};

const blogDeleteSlice = createSlice({
  name: "blogDelete",
  initialState,
  reducers: {
    setBlogDeleteState: (state, action) => {
      state.blogDelete = { ...state.blogDelete, ...action.payload };
    },
    fetchBlogDeleteAction: (state, action) => {
      state.blogDelete = { ...state.blogDelete, ...action.payload };
    },
  },
});

export const { setBlogDeleteState, fetchBlogDeleteAction } =
  blogDeleteSlice.actions;

export default blogDeleteSlice.reducer;
