# Project: DevExplorer – GitHub Profile & Repo Viewer

## 🕹️ Summary:

Create a single-page application (SPA) that allows users to search for a GitHub user and view:

- Their basic profile
- A paginated list of their repositories
- Repository details

This will involve:

- Routing (`React Router`)
- State management (`Redux`)
- Side-effects/API calls (`Redux-Saga`)
- Testing (`Jest`)
- Optional: GraphQL version using GitHub's GraphQL API

## 🧱 **Project Structure**

Pages (Routing):

- `/` → Search page
- `/profile/:username` → User profile + repo list
- `/profile/:username/repo/:reponame` → Repo detail

Redux State Example:

```jsx
{
  user: {
    profile: {},
    repos: [],
    repoDetails: {},
  },
  loading: false,
  error: null
}

```

## 📡 API Details

### ✅ GitHub REST API

- `https://api.github.com/users/{username}`
- `https://api.github.com/users/{username}/repos`
- `https://api.github.com/repos/{username}/{repo}`

OR

### 🧬 GitHub GraphQL (Optional Advanced Mode)

- Endpoint: `https://api.github.com/graphql`
- You’ll need a personal access token, or mock it for offline development.
- Documentation: [https://docs.github.com/en/graphql](https://docs.github.com/en/graphql)

## 🧠Feature List

### 1. Search GitHub User

- Input a username
- Navigate to `/profile/:username` on submit

### 2. Display GitHub User Info

- Name, avatar, followers, bio, etc.
- Fetch with Redux-Saga and store in Redux

### 3. Display Repository List

- List repo names, stars, and languages
- Paginated or infinite scroll

### 4. View Repo Details

- Click a repo to navigate to `/profile/:username/repo/:reponame`
- Show full description, forks, issues, etc.

## 🧪 **Testing (Jest)**

Write unit tests for:

- Components: SearchBar, ProfileCard, RepoList, RepoDetail
- Reducers
- Sagas (use `redux-saga-test-plan`)
- Routing (basic coverage using  `react-testing-library`)

## Reference for project structure:

```php
src/
├── components/
│   ├── SearchBar.jsx
│   ├── UserProfile.jsx
│   ├── RepoList.jsx
│   ├── RepoCard.jsx
│   └── RepoDetail.jsx
│
├── route/                     # React Router pages
│   ├── SearchPage.jsx         # Route: /
│   ├── ProfilePage.jsx        # Route: /profile/:username
│   └── RepoDetailPage.jsx     # Route: /profile/:username/repo/:reponame
│
├── services/                  # API calls to GitHub
│   └── githubService.js       # Axios or fetch wrappers for GitHub REST/GraphQL
│
├── redux/
│   ├── actions/
│   │   ├── userActions.js
│   │   ├── reposActions.js
│   │   └── repoDetailActions.js
│   │
│   ├── creators/
│   │   ├── userCreators.js
│   │   ├── reposCreators.js
│   │   └── repoDetailCreators.js
│   │
│   ├── reducers/
│   │   ├── userReducer.js
│   │   ├── reposReducer.js
│   │   ├── repoDetailReducer.js
│   │   └── rootReducer.js
│   │
│   ├── sagas/
│   │   ├── userSaga.js
│   │   ├── reposSaga.js
│   │   ├── repoDetailSaga.js
│   │   └── rootSaga.js
│   │
│   └── store.js
│
├── routes/                    # Route definitions and <BrowserRouter>
│   └── AppRouter.jsx
│
├── hooks/                    
│   └── useSearch.js           # Example hooks for use
│                  
│
├── styles/                    
│   └── global.scss
│
├── tests/
│   ├── components/
│   ├── route/
│   ├── redux/
│   │   ├── actions/
│   │   ├── creators/
│   │   ├── reducers/
│   │   └── sagas/
│   │       ├── userSaga.test.js
│   │       └── reposSaga.test.js
│
├── App.jsx
├── index.jsx
└── setupTests.js

```

## Reference for Design:

![image.png](https://github.com/user-attachments/assets/445020fb-a891-40d0-bc33-84ca4449deb2)

![image.png](https://github.com/user-attachments/assets/b3d45f64-b9cf-4af1-b4e6-931cd39ed2a6)

![image.png](https://github.com/user-attachments/assets/a7300b21-a730-4c8c-a41a-beac9cf22828)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
