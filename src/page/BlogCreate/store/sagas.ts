import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchBlogCreateAction, setBlogCreateState } from "./slice";
import { fetchBlogCreateApiCall } from "../../../api/blogCreate";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    title: string;
    shortDescription: string;
    longDescription: string;
  }>;
}

export function* fetchBlogCreateSaga(action: IExtendedAction): SagaIterator {
  const { title, shortDescription, longDescription } = action.payload;

  if (title && shortDescription && longDescription) {
    const response = yield call(fetchBlogCreateApiCall, {
      title,
      shortDescription,
      longDescription,
    });

    yield put(setBlogCreateState(response.data));
  }
}

export function* watchBlogCreateSaga() {
  yield takeLatest(fetchBlogCreateAction, fetchBlogCreateSaga);
}
