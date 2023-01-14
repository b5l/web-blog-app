import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.blogDelete;

export const getBlogDelete = createSelector(
  getState,
  (state) => state.blogDelete
);
