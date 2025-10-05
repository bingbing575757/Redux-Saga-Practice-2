# DevExplorer – GitHub Profile & Repository Viewer

A lReact application demonstrating a clean integration of React 19, Redux Toolkit (store configuration only), Redux-Saga for side‑effects, React Router v6, and Axios. Users can:

- Search a GitHub username
- View profile information
- Browse public repositories
- Inspect a single repository in detail

---
## 1. Key Features

| Area | Feature |
| ---- | ------- |
| Search | Username search with client-side navigation (`/profile/:username`) |
| Profile | Avatar, display/login name, bio, followers/following, GitHub link |
| Repositories | Updated list (name, description, stars, language) |
| Repository Detail | Stars, forks, open issues, language, license, topics, homepage, external link |
| Routing | Three-level navigation: Home → Profile → Repo Detail |
| State | Plain action types + sagas + reducers (no RTK slices yet) |
| API Layer | Centralized `githubService.js` using Axios |
| Styling | Global SCSS entry (`global.scss`) |
| Testing | Jest + Testing Library scaffold (placeholder test present) |

---
## 2. Architecture Overview

High-level flow:
```
UI Component -> dispatch(FETCH_*) -> Saga (takeLatest) -> githubService (Axios) -> Success/Failure action -> Reducer -> Updated state -> Rerender
```

Current Redux state shape:
```js
{
  user: {        // Profile data
    data: null | GitHubUser,
    error: string | null
  },
  repos: {       // Repository list
    list: GitHubRepo[],
    error: string | null
  },
  repoDetail: {  // Single repository detail
    data: null | GitHubRepo,
    error: string | null
  }
}
```

Core action type groups (no creators / no slices):
```
FETCH_USER / FETCH_USER_SUCCESS / FETCH_USER_FAILURE
FETCH_REPOS / FETCH_REPOS_SUCCESS / FETCH_REPOS_FAILURE
FETCH_REPO_DETAIL / FETCH_REPO_DETAIL_SUCCESS / FETCH_REPO_DETAIL_FAILURE
```

---
## 3. Directory Structure (Actual)
```
src/
  components/              # Presentational components
    RepoCard.jsx
    RepoDetail.jsx
    RepoList.jsx
    SearchBar.jsx
    UserProfile.jsx
  pages/                   # Route-level containers
    SearchPage.jsx
    ProfilePage.jsx
    RepoDetailPage.jsx
  routes/
    AppRouter.jsx          # Central route config
  redux/
    actions/               # Action type constants only
    reducers/              # user / repos / repoDetail / rootReducer
    sagas/                 # userSaga / reposSaga / repoDetailSaga / rootSaga
    store.js               # configureStore + saga middleware
  services/
    githubService.js       # Axios calls to GitHub REST API
  hooks/
    useSearch.js           # Encapsulates search input + navigation
  styles/
    global.scss
  tests/                   # (Scaffold; real tests pending)
  App.jsx
  index.jsx
```
Note: Earlier design references to a `creators/` directory are not implemented (kept intentionally simple). RTK `createSlice` could replace manual reducers in a future iteration.

---
## 4. Technology Stack

| Layer | Tool | Notes |
| ----- | ---- | ----- |
| UI | React 19 | Functional components + hooks |
| Routing | React Router v6 | Dynamic params for user & repo |
| State Container | Redux Toolkit (configureStore) | Using classic reducers, thunk disabled |
| Side Effects | redux-saga | `takeLatest`, `call`, `put` |
| HTTP | Axios | Thin wrapper utilities |
| Styling | Sass | Single global stylesheet |
| Testing | Jest + @testing-library/react | Placeholder test only |
| Saga Testing (Planned) | redux-saga-test-plan | Not yet integrated |

---
## 5. API Endpoints (GitHub REST)

| Purpose | Endpoint |
| ------- | -------- |
| User profile | `GET https://api.github.com/users/{username}` |
| User repositories | `GET https://api.github.com/users/{username}/repos?per_page=50&sort=updated` |
| Repository detail | `GET https://api.github.com/repos/{owner}/{repo}` |

### Optional: Personal Access Token (Rate-Limit Relief)
1. Create a classic token with minimal scopes (public data).  
2. Add a `.env` file (for Create React App the prefix must be `REACT_APP_`):
   ```bash
   REACT_APP_GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
   ```
3. Amend request headers in `githubService.js` (not implemented by default):
   ```js
   const authHeaders = process.env.REACT_APP_GITHUB_TOKEN
     ? { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` }
     : {};
   axios.get(url, { headers: authHeaders });
   ```

---
## 6. Getting Started

```bash
git clone <YOUR_REPO_URL>
cd redux-saga-practice-2
npm install
npm start
```
Navigate to: http://localhost:3000 and try searching `octocat`.

### Available Scripts
| Command | Description |
| ------- | ----------- |
| `npm start` | Start development server (CRA) |
| `npm test` | Run Jest in watch mode |
| `npm run build` | Production build to `build/` |
| `npm run eject` | Eject CRA config (irreversible) |

---
## 7. Testing Strategy (Planned Expansion)
Current status: only a placeholder test exists in `tests/redux/sagas/reposSaga.test.js`.

Recommended additions:
1. Reducers: pure function tests (happy path + error path).  
2. Sagas: `expectSaga` flow tests (success + failure).  
3. Components: render & conditional UI (loading / empty list).  
4. Routing: MemoryRouter navigation assertions.  
5. Error handling: simulate network failure (mock Axios).  

Example reducer test sketch:
```js
import userReducer from 'src/redux/reducers/userReducer';
import { FETCH_USER_SUCCESS } from 'src/redux/actions/userActions';

test('userReducer stores profile data', () => {
  const state = userReducer(undefined, { type: FETCH_USER_SUCCESS, payload: { login: 'octocat' } });
  expect(state.data.login).toBe('octocat');
});
```

---
## 8. Roadmap (Backlog)
- Loading & skeleton components
- Pagination or infinite scroll for repositories
- Language filtering & sorting (stars / updated)
- Error boundary + centralized error UI
- Token-based authenticated requests (lower rate limit impact)
- Switch to RTK slices + createAsyncThunk (or keep sagas for teaching contrast)
- Cache previously fetched users (localStorage / in-memory LRU)
- Theme support (light / dark via CSS variables or MUI)
- GitHub GraphQL variant (single query for profile + repos)
- E2E tests (Playwright or Cypress)
