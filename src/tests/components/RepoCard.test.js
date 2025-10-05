import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepoCard from '../../components/RepoCard';

test('renders repo card with name and description', () => {
  const repo = { id: 1, name: 'hello-world', description: 'test repo' };
  render(
    <MemoryRouter>
      <RepoCard repo={repo} username="octocat" />
    </MemoryRouter>
  );

  expect(screen.getByText('hello-world')).toBeInTheDocument();
  expect(screen.getByText('test repo')).toBeInTheDocument();
});
