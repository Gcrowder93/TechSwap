import ProductCard from './ProductsCard';
import { render, screen } from 'react-dom';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

test.skip('Should render Product Card', async () => {
  const { container } = render(
    <MemoryRouter>
      <ProductCard
        products={[
          {
            category: 'Computer',
            condition: 'Used',
            created_at: '2022-01-20T18:38:25.099108+00:00',
            description: 'Won it in a raffle, who wants it!?',
            id: 26,
            image:
              'https://epowwlsvajvjgzuvqqfe.supabase.co/storage/v1/object/public/product-image/public/desk.jpg',
            price: 100,
            sold: null,
            title: 'Standing Desk',
            user_id: 25,
          },
        ]}
      />
    </MemoryRouter>
  );
  await screen.findByText('Condition:');
  expect(container).toMatchSnapshot();
});
