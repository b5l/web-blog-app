import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.blogCreate;

export const getBlogCreate = createSelector(
  getState,
  (state) => state.blogCreate
);
