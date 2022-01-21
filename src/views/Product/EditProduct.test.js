import EditProduct from './EditProduct';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test.skip('Edit Product test something', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['products/34/edit']}>
      <Route path="/products/:id/edit">
        <EditProduct
          currentUser={{
            id: 'a3eef055-af5d-4f8f-9a7e-d51bafd04aa3',
            aud: 'authenticated',
            role: 'authenticated',
            email: 'tester@tester.com',
            email_confirmed_at: '2022-01-20T18:28:27.630993Z',
            phone: '',
            confirmed_at: '2022-01-20T18:28:27.630993Z',
            last_sign_in_at: '2022-01-21T02:29:33.901390713Z',
            app_metadata: '{provider: "email", providers: Array(1)}',
            user_metadata: '{}',
            identities: '[{…}]',
            created_at: '2022-01-20T18:28:27.62772Z',
            updated_at: '2022-01-21T02:29:33.902445Z',
          }}
        />
      </Route>
    </MemoryRouter>
  );
  await screen.findAllByPlaceholderText('Price');
  expect(container).toMatchSnapshot();
});
