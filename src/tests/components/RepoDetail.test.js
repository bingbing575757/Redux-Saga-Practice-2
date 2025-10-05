import { render, screen } from '@testing-library/react';
import RepoDetail from '../../components/RepoDetail';

const repo = {
  id: 1,
  name: 'hello-world',
  full_name: 'octocat/hello-world',
  description: 'My first repository!',
  stargazers_count: 100,
  forks_count: 20,
  open_issues_count: 5,
  language: 'JavaScript',
  license: { name: 'MIT' },
  owner: { login: 'octocat', avatar_url: 'https://github.com/octocat.png' },
  html_url: 'https://github.com/octocat/hello-world',
};

test('renders repo detail with full name, description, stats, and license', () => {
  render(<RepoDetail repo={repo} />);
  expect(screen.getByText('octocat')).toBeInTheDocument();
  // expect(screen.getByText('hello-world')).toBeInTheDocument();
  expect(screen.getByText(/hello-world/)).toBeInTheDocument();

  // expect(screen.getByText('My first repository!')).toBeInTheDocument();
  expect(screen.getAllByText('My first repository!')).toHaveLength(2);

  expect(screen.getByText(/100/)).toBeInTheDocument();
  // expect(screen.getByText(/MIT/)).toBeInTheDocument();
  expect(screen.getAllByText(/MIT/)).toHaveLength(2);

});
