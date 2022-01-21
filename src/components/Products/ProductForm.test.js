import ProductForm from './ProductForm';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

test('Should render Product Form', async () => {
  const { container } = render(
    <MemoryRouter>
      <ProductForm
        products={{
          onChange: 'ƒ onChange() {}',
          onSubmit: 'ƒ onSubmit() {}',
        }}
      />
    </MemoryRouter>
  );
  await screen.findByText('Condition:');
  expect(container).toMatchSnapshot();
});
