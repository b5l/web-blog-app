import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../page/Login/store/slice";
import blogPostsReducer from "../page/BlogPosts/store/slice";
import blogDetailsReducer from "../page/BlogDetails/store/slice";
import blogCreateReducer from "../page/BlogCreate/store/slice";
import blogEditReducer from "../page/BlogEdit/store/slice";
import blogDeleteReducer from "../page/BlogDelete/store/slice";

const createRootReducer = () =>
  combineReducers({
    login: loginReducer,
    blogPosts: blogPostsReducer,
    blogDetails: blogDetailsReducer,
    blogCreate: blogCreateReducer,
    blogEdit: blogEditReducer,
    blogDelete: blogDeleteReducer,
  });

export default createRootReducer;
