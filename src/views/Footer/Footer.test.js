import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Footer.js should do something', async () => {
  const { container } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  await screen.findByText('About Us');

  expect(container).toMatchSnapshot();
});
