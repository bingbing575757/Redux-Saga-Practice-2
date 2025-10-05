// reposReducer：管理仓库列表相关的 Redux 状态，包括数据和错误。
import { FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE } from "../actions/reposActions";

const initialState = {
  list: [],
  error: null,
};

export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS_SUCCESS:
      return { ...state, list: action.payload, error: null };
    case FETCH_REPOS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
