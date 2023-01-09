import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "../page/Login/store/sagas";
import { watchBlogPostsSaga } from "../page/BlogPosts/store/sagas";

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchLoginSaga)]);
  yield all([fork(watchBlogPostsSaga)]);
}
