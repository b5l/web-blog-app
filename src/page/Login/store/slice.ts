import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  login: {
    user: {
      username: string;
      password: string;
    };
    isAuth: boolean;
  };
}

export const initialState: ISliceState = {
  login: {
    user: {
      username: "",
      password: "",
    },
    isAuth: false,
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.login = { ...state.login, ...action.payload };
    },
    fetchLoginAction: (state, action) => {
      state.login = { ...state.login, ...action.payload };
    },
  },
});

export const { setLoginState, fetchLoginAction } = loginSlice.actions;

export default loginSlice.reducer;
