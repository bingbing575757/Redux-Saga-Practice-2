// rootReducer：合并所有子 reducer，统一管理全局 Redux 状态结构。
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import reposReducer from "./reposReducer";
import repoDetailReducer from "./repoDetailReducer";

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
  repoDetail: repoDetailReducer,
});

export default rootReducer;
