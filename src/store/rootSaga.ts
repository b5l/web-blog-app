import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "../page/Login/store/sagas";
import { watchBlogPostsSaga } from "../page/BlogPosts/store/sagas";
import { watchBlogDetailsSaga } from "../page/BlogDetails/store/sagas";
import { watchBlogCreateSaga } from "../page/BlogCreate/store/sagas";
import { watchBlogEditSaga } from "../page/BlogEdit/store/sagas";

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchLoginSaga)]);
  yield all([fork(watchBlogPostsSaga)]);
  yield all([fork(watchBlogDetailsSaga)]);
  yield all([fork(watchBlogCreateSaga)]);
  yield all([fork(watchBlogEditSaga)]);
}
