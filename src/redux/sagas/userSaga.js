// userSaga：监听并处理用户相关的异步 action（如获取用户信息），调用 API 并分发结果。
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../actions/userActions";
import { getUser } from "../../services/githubService";

function* fetchUserSaga(action) {
  try {
    const data = yield call(getUser, action.payload); // payload 是 username
    yield put({ type: FETCH_USER_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_USER_FAILURE, payload: e.message });
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USER, fetchUserSaga);
}
