// SearchPage 页面：首页，包含搜索栏、示例用户和仓库卡片，支持输入 GitHub 用户名跳转到 ProfilePage。
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import RepoCard from "../components/RepoCard";

export default function SearchPage() {
  // 示例用户数据（假数据，不走 API）
  const exampleUser = {
    login: "octocat",
    name: "The Octocat",
    bio: "I'm a GitHub mascot.",
    avatar_url: "https://github.com/octocat.png",
    followers: 19797,
    following: 9,
    html_url: "https://github.com/octocat",
  };

  const exampleRepos = [
    {
      id: 1,
      name: "Spoon-Knife",
      description: "A test repository",
      stargazers_count: 10126,
      language: "HTML",
    },
    {
      id: 2,
      name: "hello-world",
      description: "My first repository on GitHub!",
      stargazers_count: 4007,
      language: "JavaScript",
    },
    {
      id: 3,
      name: "git-consortium",
      description: "This repo is for demonstration purposes only.",
      stargazers_count: 1309,
      language: "Ruby",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", textAlign: "center" }}>
      <h1>GitHub Profile & Repo Viewer</h1>
      <SearchBar />

      {/* 示例展示区 */}
      <div style={{ marginTop: "40px", textAlign: "left" }}>
        <h2>Example: Try "octocat"</h2>

        {/* 示例用户卡片 */}
        <UserProfile user={exampleUser} />

        {/* 示例仓库卡片 */}
        <ul className="repo-list">
          {exampleRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} username={exampleUser.login} />
          ))}
        </ul>
      </div>
    </div>
  );
}
