// ProfilePage 页面：展示指定 GitHub 用户的个人信息和仓库列表。
// 包含 UserProfile（用户卡片）和 RepoList（仓库列表卡片），通过路由参数 username 获取数据。
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USER } from "../redux/actions/userActions";
import { FETCH_REPOS } from "../redux/actions/reposActions";
import UserProfile from "../components/UserProfile";
import RepoList from "../components/RepoList";

export default function ProfilePage() {
  const { username } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);
  const repos = useSelector((state) => state.repos.list);

  useEffect(() => {
    if (username) {
      dispatch({ type: FETCH_USER, payload: username });
      dispatch({ type: FETCH_REPOS, payload: username });
    }
  }, [username, dispatch]);

  return (
    <div>
      <UserProfile user={user} />
      <RepoList repos={repos} username={username} />
    </div>
  );
}
