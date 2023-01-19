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
    yield put(setBlogEditState({ isSuccessful: false }));

    if (id && (title || type || description)) {
      const response = yield call(fetchBlogEditApiCall, {
        id,
        title,
        type,
        description,
      });

      yield put(setBlogEditState(response.data));
    }
  } catch (error) {
    yield put(setBlogEditState({ isSuccessful: false }));
  } finally {
    yield put(setBlogEditState({ isSuccessful: false, isEditing: false }));
  }
}

export function* watchBlogEditSaga() {
  yield takeLatest(fetchBlogEditAction, fetchBlogEditSaga);
}
