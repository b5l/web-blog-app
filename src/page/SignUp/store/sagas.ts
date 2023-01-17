import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchSignUpAction, setSignUpState } from "./slice";
import { fetchSignUpApiCall } from "../../../api/signUp";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    username: string;
    password: string;
  }>;
}

export function* fetchSignUpSaga(action: IExtendedAction): SagaIterator {
  const { username, password } = action.payload;
  try {
    yield put(setSignUpState({ isSuccessful: false, userTaken: false }));
    if (username && password) {
      const response = yield call(fetchSignUpApiCall, { username, password });

      yield put(setSignUpState(response.data));
    }
  } catch (error) {
    yield put(setSignUpState({ isSuccessful: false, userTaken: false }));
  } finally {
    yield put(setSignUpState({ isSuccessful: false, userTaken: false }));
  }
}

export function* watchSignUpSaga() {
  yield takeLatest(fetchSignUpAction, fetchSignUpSaga);
}
