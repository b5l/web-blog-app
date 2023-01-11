import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogDetails: {
    data: {
      id: number;
      title: string;
      type: string;
      description: string;
    };
  };
}

export const initialState: ISliceState = {
  blogDetails: {
    data: {
      id: 0,
      title: "",
      type: "",
      description: "",
    },
  },
};

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {
    setBlogDetailsState: (state, action) => {
      state.blogDetails.data = { ...state.blogDetails.data, ...action.payload };
    },
    fetchBlogDetailsAction: (state, action) => {
      state.blogDetails.data = { ...state.blogDetails.data, ...action.payload };
    },
  },
});

export const { setBlogDetailsState, fetchBlogDetailsAction } =
  blogDetailsSlice.actions;

export default blogDetailsSlice.reducer;
