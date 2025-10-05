import RepoCard from "./RepoCard";

export default function RepoList({ repos, username }) {
  if (!repos || repos.length === 0)
    return <p style={{ textAlign: 'center', color: '#888', marginTop: '32px' }}>No repositories found.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '32px auto' }}>
      <ul className="repo-list" style={{ padding: 0, margin: 0, listStyle: 'none' }}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} username={username} />
        ))}
      </ul>
    </div>
  );
}
