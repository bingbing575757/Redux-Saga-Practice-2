import { Link } from "react-router-dom";

export default function RepoCard({ repo, username }) {
  return (
    <li className="repo-card">
      <Link to={`/profile/${username}/repo/${repo.name}`}>{repo.name}</Link>
      <p>{repo.description}</p>
      <div className="repo-meta">
        <span>⭐ {repo.stargazers_count} stars</span>
        <span>● {repo.language || 'N/A'}</span>
      </div>
    </li>
  );
}
