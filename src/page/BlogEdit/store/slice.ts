import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogEdit: {
    data: {
      id: number;
      title?: string;
      shortDescription?: string;
      longDescription?: string;
    };
  };
}

export const initialState: ISliceState = {
  blogEdit: {
    data: {
      id: 0,
      title: "",
      shortDescription: "",
      longDescription: "",
    },
  },
};

const blogEditSlice = createSlice({
  name: "blogEdit",
  initialState,
  reducers: {
    setBlogEditState: (state, action) => {},
    fetchBlogEditAction: (state, action) => {
      state.blogEdit = { ...action.payload };
    },
  },
});

export const { setBlogEditState, fetchBlogEditAction } = blogEditSlice.actions;

export default blogEditSlice.reducer;
