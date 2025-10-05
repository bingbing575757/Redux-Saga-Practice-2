import axios from "axios";

const BASE_URL = "https://api.github.com";

// 获取用户基本信息
export const getUser = (username) =>
  axios
    .get(`${BASE_URL}/users/${username}`)
    .then((res) => res.data);

// 获取用户仓库列表
export const getUserRepos = (username) =>
  axios
    .get(`${BASE_URL}/users/${username}/repos?per_page=50&sort=updated`)
    .then((res) => res.data);

// 获取单个仓库详情
export const getRepoDetail = (owner, repo) =>
  axios
    .get(`${BASE_URL}/repos/${owner}/${repo}`)
    .then((res) => res.data);
