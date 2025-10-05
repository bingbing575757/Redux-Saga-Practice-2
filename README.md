<div align="center">

# DevExplorer · GitHub Profile & Repo Viewer

一个使用 React + Redux-Saga 构建的 GitHub 用户 / 仓库浏览器。输入用户名即可查看用户基本信息、仓库列表以及单个仓库详情。

English summary below ↓

</div>

## ✨ 特性概览

- 按用户名搜索 GitHub 用户（示例：octocat）
- 展示用户头像 / 名称 / Bio / 关注数
- 拉取并展示仓库列表（名称 / star / 语言 / 描述）
- 查看单个仓库详情（stars / forks / issues / language / license / topics / homepage）
- 路由导航：主页搜索 → 用户页 → 仓库详情页
- Redux-Saga 统一管理异步数据流
- 模块化 services 抽离 API 调用（Axios）
- 使用 Sass 编写全局样式
- 预置 Jest + Testing Library（当前有占位测试，可扩展）

## 🛠 技术栈

| 分类 | 使用 | 说明 |
| ---- | ---- | ---- |
| View | React 19 | 函数组件 + Hooks |
| Routing | React Router v6 | BrowserRouter + 动态参数 |
| State | Redux Toolkit configureStore | 结合 sagaMiddleware，禁用 thunk |
| Side Effects | redux-saga | takeLatest / call / put 组织异步流 |
| HTTP | Axios | 简单封装 REST 请求 |
| Style | Sass | `global.scss` 全局样式 |
| Test | Jest + @testing-library/react | 组件 / saga / reducer 测试（待补充） |
| Utils | redux-saga-test-plan | Saga 行为测试（待接入） |

## 🔄 数据流示意

组件触发 → dispatch(FETCH_*) → saga 监听 → 调用 githubService → 成功/失败 action → reducer 写入 state → UI 响应。

实际 Redux 状态结构：

```js
{
  user: {        // 用户信息
    data: null | { ...GitHubUser },
    error: null | string
  },
  repos: {       // 仓库列表
    list: [],
    error: null | string
  },
  repoDetail: {  // 单个仓库详情
    data: null | { ...GitHubRepo },
    error: null | string
  }
}
```

对应触发的核心 action types（未使用 action creator 简化写法）：

```js
FETCH_USER / SUCCESS / FAILURE
FETCH_REPOS / SUCCESS / FAILURE
FETCH_REPO_DETAIL / SUCCESS / FAILURE
```

## 🧭 路由

| Path | 页面 | 说明 |
| ---- | ---- | ---- |
| `/` | SearchPage | 搜索入口 + 示例展示 |
| `/profile/:username` | ProfilePage | 用户信息 + 仓库列表 |
| `/profile/:username/repo/:reponame` | RepoDetailPage | 仓库详情 |

## 📁 目录结构（真实项目）

```bash
src/
  components/          # UI 组件 (RepoCard / RepoList / RepoDetail / UserProfile / SearchBar)
  pages/               # 页面级组件 (SearchPage / ProfilePage / RepoDetailPage)
  routes/              # 路由入口 (AppRouter.jsx)
  redux/
    actions/           # action type 常量
    reducers/          # user / repos / repoDetail / rootReducer
    sagas/             # userSaga / reposSaga / repoDetailSaga / rootSaga
    store.js
  services/            # githubService.js（REST API 调用）
  hooks/               # useSearch 自定义 Hook
  styles/              # global.scss
  tests/               # （当前仅占位测试，待完善）
  App.jsx
  index.jsx
```

> 说明：README 中早期设计的 creators/ 目录目前未实现；如需加强可添加 action creator 封装或使用 RTK createSlice。

## 🌐 GitHub API（REST）

使用的端点：

| 功能 | Endpoint |
| ---- | -------- |
| 获取用户 | `GET /users/{username}` |
| 获取仓库列表 | `GET /users/{username}/repos?per_page=50&sort=updated` |
| 获取仓库详情 | `GET /repos/{owner}/{repo}` |

⚠️ Rate Limit：未携带 Token 的匿名请求存在速率限制。若频繁调试可：

1. 生成 GitHub Personal Access Token (classic / 只勾选 public_repo 即可)。
2. 在本地创建 `.env`（CRA 需前缀 REACT_APP_）：
   ```bash
   REACT_APP_GITHUB_TOKEN=ghp_xxx
   ```
3. 在 `githubService.js` 中给 axios 添加：
   ```js
   axios.get(url, { headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` } })
   ```
（当前项目尚未内置此逻辑，按需添加。）

## ▶️ 快速开始

```bash
git clone <repo_url>
cd redux-saga-practice-2
npm install
npm start
```

然后打开 http://localhost:3000 并尝试输入：`octocat`

## 🧪 测试

当前 tests/ 下仅有占位测试：

```js
test('dummy test', () => { expect(true).toBe(true) })
```

推荐补充：

1. Reducer 纯函数测试（给定 state + action 输出）
2. Saga 流程（redux-saga-test-plan `expectSaga`）
3. 组件渲染（ProfilePage：mock store 注入 user / repos）
4. 路由跳转（MemoryRouter + fireEvent.submit）
5. 错误分支（API 失败时 error 文案展示）

运行：

```bash
npm test
```

## 🧱 关键文件速览

| 文件 | 作用 |
| ---- | ---- |
| `src/redux/store.js` | 配置 Redux store + sagaMiddleware |
| `src/redux/sagas/*.js` | 监听 FETCH_*，请求 GitHub API |
| `src/services/githubService.js` | Axios 封装 GitHub REST 调用 |
| `src/pages/*` | 页面级容器，负责数据调度 |
| `src/components/*` | 纯展示组件（部分含少量交互） |
| `src/hooks/useSearch.js` | 封装搜索输入 & 导航逻辑 |

## 🚀 可迭代方向（Backlog）

- [ ] 添加 Loading / Skeleton 组件
- [ ] 添加分页 / infinite scroll（配合 `page` 参数）
- [ ] 引入错误边界（Error Boundary）
- [ ] 缓存最近访问的用户数据（localStorage / RTK Query）
- [ ] 支持按语言过滤仓库
- [ ] 添加 star / fork 排序切换
- [ ] dark / light 主题切换（可用 MUI / CSS variables）
- [ ] 引入 GitHub GraphQL 版本（合并 profile + repos 查询）
- [ ] 增加 E2E 测试（Playwright / Cypress）

## 🤝 贡献

欢迎 fork 后提交 PR：

1. 创建 feature 分支：`git checkout -b feat/xxx`
2. 提交：`git commit -m "feat: 支持仓库语言过滤"`
3. 推送并创建 PR。

建议保持：

- 代码注释与现有风格一致（中英文均可，清楚即可）
- Saga / Reducer 命名语义化
- 最小可验证增量提交

## 🧾 License

仅学习与练习用途（如需开源协议可补充 MIT）。

---

## 🇺🇸 English Summary

DevExplorer is a small learning project built with React 19, Redux Toolkit + Redux-Saga, React Router v6 and Axios. It lets you search a GitHub username, view profile info, list repositories and open a repository detail page. State is split into `user`, `repos`, and `repoDetail` slices; sagas listen for plain action types (e.g. `FETCH_USER`) and call GitHub REST endpoints. Tests are placeholders and can be expanded (reducers, sagas, components, routing). Future ideas include pagination, caching, GraphQL, theming and better error + loading states.

---

## 📌 脚本 (NPM Scripts)

| 命令 | 作用 |
| ---- | ---- |
| `npm start` | 启动开发服务器 (http://localhost:3000) |
| `npm test` | 进入测试 watch 模式 |
| `npm run build` | 生产构建（输出到 build/） |
| `npm run eject` | 暴露 CRA 配置（不可逆） |

---

如果你希望我继续帮你：

1. 加入 Token 支持
2. 实现分页 / 语言过滤
3. 添加首批真实测试用例

随时告诉我下一步要做什么 🙌

