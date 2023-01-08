import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "../page/Login/store/sagas";

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchLoginSaga)]);
}
