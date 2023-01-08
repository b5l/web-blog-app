import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../../../store";

const getState = (state: TStore) => state.login;

export const getLogin = createSelector(getState, (state) => state.login);
