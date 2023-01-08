import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../page/Login/store/slice";

const createRootReducer = () =>
  combineReducers({
    login: loginReducer,
  });

export default createRootReducer;
