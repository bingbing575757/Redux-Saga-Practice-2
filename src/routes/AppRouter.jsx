// AppRouter 路由组件：定义项目所有页面路由，负责页面跳转和参数传递。
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import RepoDetailPage from "../pages/RepoDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/profile/:username/repo/:reponame" element={<RepoDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
