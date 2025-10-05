// repoDetailSaga：监听并处理仓库详情相关的异步 action，调用 API 并分发结果。
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_REPO_DETAIL,
  FETCH_REPO_DETAIL_SUCCESS,
  FETCH_REPO_DETAIL_FAILURE,
} from "../actions/repoDetailActions";
import { getRepoDetail } from "../../services/githubService";

function* fetchRepoDetailSaga(action) {
  try {
    const { owner, repo } = action.payload;
    const data = yield call(getRepoDetail, owner, repo);
    yield put({ type: FETCH_REPO_DETAIL_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_REPO_DETAIL_FAILURE, payload: e.message });
  }
}

export default function* repoDetailSaga() {
  yield takeLatest(FETCH_REPO_DETAIL, fetchRepoDetailSaga);
}

