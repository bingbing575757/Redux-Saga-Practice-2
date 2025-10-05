export default function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div className="user-profile">
      <img
        src={user.avatar_url}
        alt={user.login}
        width="96"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      />
      <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 8px' }}>{user.name || user.login}</h2>
      <div style={{ color: '#555', fontSize: '1.1rem', marginBottom: '12px' }}>{user.login}</div>
      <p style={{ color: '#666', marginBottom: '16px' }}>{user.bio}</p>
      <div style={{ color: '#888', fontSize: '0.95rem', marginBottom: '16px' }}>
        <span style={{ marginRight: '16px' }}>👥 {user.followers} followers</span>
        <span>👤 {user.following} following</span>
      </div>
      <a href={user.html_url} target="_blank" rel="noreferrer" className="github-link">
        View on GitHub
      </a>
    </div>
  );
}
