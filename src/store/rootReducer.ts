import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../page/Login/store/slice";
import blogPostsReducer from "../page/BlogPosts/store/slice";
import blogDetailsReducer from "../page/BlogDetails/store/slice";

const createRootReducer = () =>
  combineReducers({
    login: loginReducer,
    blogPosts: blogPostsReducer,
    blogDetails: blogDetailsReducer,
  });

export default createRootReducer;
