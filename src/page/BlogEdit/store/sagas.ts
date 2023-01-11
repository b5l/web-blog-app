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
    type?: string;
    description?: string;
  }>;
}

export function* fetchBlogEditSaga(action: IExtendedAction): SagaIterator {
  const { id, title, type, description } = action.payload;

  try {
    yield put(setBlogEditState({ isSuccess: false }));

    if (id && (title || type || description)) {
      const response = yield call(fetchBlogEditApiCall, {
        id,
        title,
        type,
        description,
      });

      yield put(setBlogEditState(response.data));
      if (response.data.isSuccess === true) {
        yield put(setBlogEditState({ isSuccess: true }));
      } else {
        yield put(setBlogEditState({ isSuccess: false }));
      }
    }
  } catch (error) {
    yield put(setBlogEditState({ isSuccess: false }));
  } finally {
    yield put(setBlogEditState({ isSuccess: false }));
  }
}

export function* watchBlogEditSaga() {
  yield takeLatest(fetchBlogEditAction, fetchBlogEditSaga);
}
