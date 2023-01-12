import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchBlogDeleteAction, setBlogDeleteState } from "./slice";
import { fetchBlogDeleteApiCall } from "../../../api/blogDelete";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    id: number;
  }>;
}

export function* fetchBlogDeleteSaga(action: IExtendedAction): SagaIterator {
  const { id } = action.payload;
  try {
    yield put(setBlogDeleteState({ isDeleted: false }));

    if (id) {
      const response = yield call(fetchBlogDeleteApiCall, { id });

      yield put(setBlogDeleteState(response.data));
    }
  } catch (error) {
    yield put(setBlogDeleteState({ isDeleted: false }));
  } finally {
    yield put(setBlogDeleteState({ isDeleted: false }));
  }
}

export function* watchBlogDeleteSaga() {
  yield takeLatest(fetchBlogDeleteAction, fetchBlogDeleteSaga);
}
