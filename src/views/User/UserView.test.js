import UserView from './UserView';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test('UserView should do something', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/profile/26']}>
      <Route path="/profile/:id">
        <UserView
          currentUser={{
            user: {
              id: '0fcdf7e2-48e8-4f4d-b4e6-5453ce7ee18d',
              created_at: '2022-01-20T23:03:53.531704+00:00',
              email: 'rewq@ewq.vfdsa',
              name: 'rewqrewq',
              slack_id: 'rewqrewq',
              linkedin_url: 'rewqrewq',
              user_id: '0fcdf7e2-48e8-4f4d-b4e6-5453ce7ee18d',
            },
          }}
        />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Profile');

  expect(container).toMatchSnapshot();
});