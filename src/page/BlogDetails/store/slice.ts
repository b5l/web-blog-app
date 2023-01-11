import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogDetails: {
    data: {
      id: number;
      title: string;
      type: string;
      description: string;
    };
    isFetching: boolean;
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
    isFetching: false,
  },
};

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {
    setBlogDetailsState: (state, action) => {
      state.blogDetails.data = { ...state.blogDetails.data, ...action.payload };
    },
    fetchBlogDetailsAction: (state, action) => {},
  },
});

export const { setBlogDetailsState, fetchBlogDetailsAction } =
  blogDetailsSlice.actions;

export default blogDetailsSlice.reducer;
