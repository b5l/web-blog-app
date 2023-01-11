import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchBlogEditAction, setBlogEditState } from "./slice";
import { fetchBlogEditApiCall } from "../../../api/blogEdit";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    id: number;
    title?: string;
    shortDescription?: string;
    longDescription?: string;
  }>;
}

export function* fetchBlogEditSaga(action: IExtendedAction): SagaIterator {
  const { id, title, shortDescription, longDescription } = action.payload;

  if (id && (title || shortDescription || longDescription)) {
    const response = yield call(fetchBlogEditApiCall, {
      id,
      title,
      shortDescription,
      longDescription,
    });

    yield put(setBlogEditState(response.data));
  }
}

export function* watchBlogEditSaga() {
  yield takeLatest(fetchBlogEditAction, fetchBlogEditSaga);
}
