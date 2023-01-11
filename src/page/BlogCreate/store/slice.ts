import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogCreate: {
    data: {
      title: string;
      type: string;
      description: string;
    };
    isSuccess: boolean;
  };
}

export const initialState: ISliceState = {
  blogCreate: {
    data: {
      title: "",
      type: "",
      description: "",
    },
    isSuccess: false,
  },
};

const blogCreateSlice = createSlice({
  name: "blogCreate",
  initialState,
  reducers: {
    setBlogCreateState: (state, action) => {
      state.blogCreate = { ...state.blogCreate, ...action.payload };
    },
    fetchBlogCreateAction: (state, action) => {
      state.blogCreate = { ...state.blogCreate, ...action.payload };
    },
  },
});

export const { setBlogCreateState, fetchBlogCreateAction } =
  blogCreateSlice.actions;

export default blogCreateSlice.reducer;
