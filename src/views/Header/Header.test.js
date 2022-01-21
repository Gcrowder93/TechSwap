import Header from './Header';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Footer.js should do something', async () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  await screen.findByText('Log Out');

  expect(container).toMatchSnapshot();
});
