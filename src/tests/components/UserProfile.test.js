import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserProfile from '../../components/UserProfile';

const user = {
  login: 'octocat',
  name: 'The Octocat',
  bio: 'GitHub mascot',
  avatar_url: 'https://github.com/octocat.png',
  followers: 100,
  following: 10,
  html_url: 'https://github.com/octocat',
};

test('renders user profile with name, bio, and avatar', () => {
  render(<UserProfile user={user} />);
  expect(screen.getByText('The Octocat')).toBeInTheDocument();
  expect(screen.getByText('GitHub mascot')).toBeInTheDocument();
  expect(screen.getByAltText('octocat')).toBeInTheDocument();
});
