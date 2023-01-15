import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.signUp;

export const getSignUp = createSelector(getState, (state) => state.signUp);
