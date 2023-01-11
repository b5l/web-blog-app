import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchBlogDetailsAction, setBlogDetailsState } from "./slice";
import { fetchBlogDetailsApiCall } from "../../../api/blogDetails";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    id: number;
  }>;
}

export function* fetchBlogDetailsSaga(action: IExtendedAction): SagaIterator {
  const { id } = action.payload;

  if (id) {
    const response = yield call(fetchBlogDetailsApiCall, { id });

    yield put(setBlogDetailsState(response.data));
  }
}

export function* watchBlogDetailsSaga() {
  yield takeLatest(fetchBlogDetailsAction, fetchBlogDetailsSaga);
}
