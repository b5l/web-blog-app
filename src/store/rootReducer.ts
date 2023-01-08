import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../page/Login/store/slice";
import blogPostsReducer from "../page/BlogPosts/store/slice";

const createRootReducer = () =>
  combineReducers({
    login: loginReducer,
    blogPosts: blogPostsReducer,
  });

export default createRootReducer;
