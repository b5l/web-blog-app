import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.blogPosts;

export const getBlogPosts = createSelector(
  getState,
  (state) => state.blogPosts
);
