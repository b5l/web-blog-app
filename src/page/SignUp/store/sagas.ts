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

      if (response.data.isSuccessful === true) {
        yield put(setSignUpState({ isSuccessful: true }));
      } else {
        yield put(setSignUpState({ isSuccessful: false }));
      }

      if (response.data.userTaken === true) {
        yield put(setSignUpState({ userTaken: true }));
      } else {
        yield put(setSignUpState({ userTaken: false }));
      }
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
