import AboutUs from './AboutUs';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Should Render James', async () => {
  const { container } = render(
    <MemoryRouter>
      <AboutUs h2="James" />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
