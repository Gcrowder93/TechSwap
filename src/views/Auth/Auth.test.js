import Auth from './Auth';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test('Auth.js does some stuff', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/sign-in']}>
      <Route path="/sign-in">
        <Auth />
      </Route>
    </MemoryRouter>
  );

  await screen.findAllByText('Sign In');

  expect(container).toMatchSnapshot();
});
