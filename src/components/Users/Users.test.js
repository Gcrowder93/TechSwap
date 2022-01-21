import Users from './Users';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Should render users profile page', async () => {
  const { container } = render(
    <MemoryRouter>
      <Users
        user={{
          id: 26,
          created_at: '2022-01-20T23:03:53.531704+00:00',
          email: 'rewq@ewq.vfdsa',
          name: 'rewqrewq',
          slack_id: 'rewqrewq',
          linkedin_url: 'rewqrewq',
          user_id: '0fcdf7e2-48e8-4f4d-b4e6-5453ce7ee18d',
        }}
      />
    </MemoryRouter>
  );

  await screen.findByText('Profile', 'Slack: ');

  expect(container).toMatchSnapshot();
});
