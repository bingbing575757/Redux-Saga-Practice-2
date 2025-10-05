export default function RepoDetail({ repo }) {
  if (!repo) return null;

  return (
    <div className="repo-detail">
      {/* 顶部作者和仓库名 */}
      <div className="repo-header">
        <img
          src={repo.owner?.avatar_url}
          alt={repo.owner?.login}
          width="48"
        />
        <div>
          <div className="repo-title">
            {repo.owner?.login}
            <span>/ {repo.name}</span>
          </div>
        </div>
      </div>

      {/* 仓库描述 */}
      <div className="repo-description">{repo.description}</div>

      {/* About区块 */}
      <div className="repo-about">
        <div className="about-title">About</div>
        <div className="about-text">{repo.description}</div>
        {repo.topics && repo.topics.length > 0 && (
          <div className="about-topics">Topics: {repo.topics.join(', ')}</div>
        )}
        {repo.homepage && (
          <div className="about-homepage">
            Homepage: <a href={repo.homepage} target="_blank" rel="noreferrer">{repo.homepage}</a>
          </div>
        )}
        {repo.license && (
          <div className="about-license">License: {repo.license.name}</div>
        )}
      </div>

      {/* 关键信息分组 */}
      <div className="repo-meta">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🐛 {repo.open_issues_count}</span>
        <span>💻 {repo.language || 'N/A'}</span>
        {repo.license && <span>📄 {repo.license.name}</span>}
      </div>

      {/* GitHub 链接 */}
      <div className="repo-links">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          🔗 View on GitHub
        </a>
      </div>
    </div>
  );
}
