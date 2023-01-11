import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogEdit: {
    data: {
      id: number;
      title?: string;
      type?: string;
      description?: string;
    };
    isSuccess: boolean;
  };
}

export const initialState: ISliceState = {
  blogEdit: {
    data: {
      id: 0,
      title: "",
      type: "",
      description: "",
    },
    isSuccess: false,
  },
};

const blogEditSlice = createSlice({
  name: "blogEdit",
  initialState,
  reducers: {
    setBlogEditState: (state, action) => {
      state.blogEdit = { ...state.blogEdit, ...action.payload };
    },
    fetchBlogEditAction: (state, action) => {
      state.blogEdit = { ...state.blogEdit, ...action.payload };
    },
  },
});

export const { setBlogEditState, fetchBlogEditAction } = blogEditSlice.actions;

export default blogEditSlice.reducer;
