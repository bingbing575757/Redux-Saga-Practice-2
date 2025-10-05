// RepoDetailPage 页面：展示指定仓库的详细信息，调用 RepoDetail 组件，数据通过路由参数获取。
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_REPO_DETAIL } from "../redux/actions/repoDetailActions";
import RepoDetail from "../components/RepoDetail";

export default function RepoDetailPage() {
  const { username, reponame } = useParams();
  const dispatch = useDispatch();

  const { data: repo, error } = useSelector((state) => state.repoDetail);

  useEffect(() => {
    if (username && reponame) {
      dispatch({ type: FETCH_REPO_DETAIL, payload: { owner: username, repo: reponame } });
    }
  }, [username, reponame, dispatch]);

  if (error) return <p>Error: {error}</p>;
  if (!repo) return <p>Loading...</p>;
console.log("RepoDetail params:", username, reponame);

  return <RepoDetail repo={repo} />;
}
