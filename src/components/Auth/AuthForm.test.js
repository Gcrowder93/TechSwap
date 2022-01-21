import AuthForm from './AuthForm';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

test('Should render Auth Form', async () => {
  const { container } = render(
    <MemoryRouter>
      <AuthForm
        user={{
          email: '',
          errorMessage: '',
          handleSubmit: 'ƒ handleSubmit() {}',
          password: '',
          setEmail: 'ƒ bound dispatchAction() {}',
          setPassword: 'ƒ bound dispatchAction() {}',
        }}
      />
    </MemoryRouter>
  );
  await screen.findByText('Email:');
  expect(container).toMatchSnapshot();
});
