import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.blogDetails;

export const getBlogDetails = createSelector(
  getState,
  (state) => state.blogDetails
);
