import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  signUp: {
    user: {
      username: string;
      password: string;
    };
    userTaken: boolean;
    isSuccessful: boolean;
  };
}

export const initialState: ISliceState = {
  signUp: {
    user: {
      username: "",
      password: "",
    },
    userTaken: false,
    isSuccessful: false,
  },
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setSignUpState: (state, action) => {
      state.signUp = { ...state.signUp, ...action.payload };
    },
    fetchSignUpAction: (state, action) => {
      state.signUp = { ...state.signUp, ...action.payload };
    },
  },
});

export const { setSignUpState, fetchSignUpAction } = signUpSlice.actions;

export default signUpSlice.reducer;
