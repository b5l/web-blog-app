import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchBlogPostsAction, setBlogPostsState } from "./slice";
import { fetchBlogPostsApiCall } from "../../../api/blogPosts";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{}>;
}

export function* fetchBlogPostsSaga(action: IExtendedAction): SagaIterator {
  const {} = action.payload;

  yield put(setBlogPostsState({ isFetching: false }));

  const response = yield call(fetchBlogPostsApiCall);

  yield put(setBlogPostsState(response.data));
}

export function* watchBlogPostsSaga() {
  yield takeLatest(fetchBlogPostsAction, fetchBlogPostsSaga);
}
