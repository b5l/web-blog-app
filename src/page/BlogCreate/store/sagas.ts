import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { Action } from "@reduxjs/toolkit";
import { fetchBlogCreateAction, setBlogCreateState } from "./slice";
import { fetchBlogCreateApiCall } from "../../../api/blogCreate";

interface IExtendedAction extends Action {
  type: string;
  payload: Partial<{
    title: string;
    type: string;
    description: string;
  }>;
}

export function* fetchBlogCreateSaga(action: IExtendedAction): SagaIterator {
  const { title, type, description } = action.payload;
  try {
    yield put(setBlogCreateState({ isSuccessful: false }));

    if (title || type || description) {
      const response = yield call(fetchBlogCreateApiCall, {
        title,
        type,
        description,
      });

      yield put(setBlogCreateState(response.data));

      yield put(setBlogCreateState(response.data));
      if (response.data.isSuccess === true) {
        yield put(setBlogCreateState({ isSuccessful: true }));
      } else {
        yield put(setBlogCreateState({ isSuccessful: false }));
      }
    }
  } catch (error) {
    yield put(setBlogCreateState({ isSuccessful: false }));
  } finally {
    yield put(setBlogCreateState({ isSuccessful: false }));
  }
}

export function* watchBlogCreateSaga() {
  yield takeLatest(fetchBlogCreateAction, fetchBlogCreateSaga);
}
