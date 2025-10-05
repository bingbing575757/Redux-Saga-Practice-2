// reposSaga：监听并处理仓库列表相关的异步 action，调用 API 并分发结果。
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE } from "../actions/reposActions";
import { getUserRepos } from "../../services/githubService";

function* fetchReposSaga(action) {
  try {
    const data = yield call(getUserRepos, action.payload); // payload 是 username
    yield put({ type: FETCH_REPOS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_REPOS_FAILURE, payload: e.message });
  }
}

export default function* reposSaga() {
  yield takeLatest(FETCH_REPOS, fetchReposSaga);
}
