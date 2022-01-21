import AuthReg from './AuthReg';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Should render AuthReg.js', async () => {
  const { container } = render(
    <MemoryRouter>
      <AuthReg />
    </MemoryRouter>
  );

  await screen.findByText('Email:');

  expect(container).toMatchSnapshot();
});
