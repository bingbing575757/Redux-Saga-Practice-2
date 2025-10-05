// userReducer：管理用户信息相关的 Redux 状态，包括数据和错误。
import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../actions/userActions";

const initialState = {
  data: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
