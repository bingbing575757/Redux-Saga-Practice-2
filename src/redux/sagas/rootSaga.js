// rootSaga：合并所有子 saga，统一管理异步 action 的监听和处理。
import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import reposSaga from "./reposSaga";
import repoDetailSaga from "./repoDetailSaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    reposSaga(),
    repoDetailSaga(),
  ]);
}
