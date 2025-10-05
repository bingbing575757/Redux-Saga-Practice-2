// repoDetailReducer：管理单个仓库详情相关的 Redux 状态，包括数据和错误。
import { FETCH_REPO_DETAIL_SUCCESS, FETCH_REPO_DETAIL_FAILURE } from "../actions/repoDetailActions";

const initialState = {
  data: null,
  error: null,
};

export default function repoDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPO_DETAIL_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_REPO_DETAIL_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}



