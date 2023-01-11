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
    yield put(setBlogCreateState({ isSuccess: false }));

    if (title || type || description) {
      const response = yield call(fetchBlogCreateApiCall, {
        title,
        type,
        description,
      });

      yield put(setBlogCreateState(response.data));

      yield put(setBlogCreateState(response.data));
      if (response.data.isSuccess === true) {
        yield put(setBlogCreateState({ isSuccess: true }));
      } else {
        yield put(setBlogCreateState({ isSuccess: false }));
      }
    }
  } catch (error) {
    yield put(setBlogCreateState({ isSuccess: false }));
  } finally {
    yield put(setBlogCreateState({ isSuccess: false }));
  }
}

export function* watchBlogCreateSaga() {
  yield takeLatest(fetchBlogCreateAction, fetchBlogCreateSaga);
}
