import EditProductComp from './EditProductComp';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

test('Should render Edit Product Component', async () => {
  const { container } = render(
    <MemoryRouter>
      <EditProductComp
        products={{
          category: 'accessories',
          condition: 'Slightly used',
          description: 'High performance computer mouse',
          id: '34',
          onStateChange: 'ƒ onStateChange() {}',
          onSubmit: 'ƒ onSubmit() {}',
          price: 45,
          title: 'LogiTech MX Master 3',
        }}
      />
    </MemoryRouter>
  );

  await screen.findByText('Condition:');
  expect(container).toMatchSnapshot();
});
