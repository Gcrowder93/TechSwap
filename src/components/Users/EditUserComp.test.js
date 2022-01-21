import EditUserComp from './Users';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Should render Edit User Component', async () => {
  const { container } = render(
    <MemoryRouter>
      <EditUserComp
        user={{
          label: 'Edit User Info',
          name: 'rewqrewq',
          slack_id: 'rewqrewq',
          linkedin_url: 'rewqrewq',
          onChange: 'ƒ onChange() {}',
          onSubmit: 'ƒ onSubmit() {}',
        }}
      />
    </MemoryRouter>
  );

  await screen.findByText('Profile');

  expect(container).toMatchSnapshot();
});
