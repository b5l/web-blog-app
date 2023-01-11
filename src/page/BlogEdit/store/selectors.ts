import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.blogEdit;

export const getBlogEdit = createSelector(getState, (state) => state.blogEdit);
