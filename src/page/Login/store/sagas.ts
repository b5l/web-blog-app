import { SagaIterator } from "redux-saga";
import { fetchLoginApiCall } from "../../../api/login";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchLoginAction, setLoginState } from "./slice";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    username: string;
    password: string;
  }>;
}

export function* fetchLoginSaga(action: IExtendedAction): SagaIterator {
  const { username, password } = action.payload;
  try {
    yield put(setLoginState({ isAuth: false }));
    if (username && password) {
      const response = yield call(fetchLoginApiCall, { username, password });

      yield put(setLoginState(response.data));
    }
  } catch (error) {
    yield put(setLoginState({ isAuth: false }));
  } finally {
    yield put(setLoginState({ isAuth: false }));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(fetchLoginAction, fetchLoginSaga);
}
