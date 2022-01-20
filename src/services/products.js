import { client, checkError } from './client';

export async function fetchProducts() {
  const resp = await client.from('products').select('*');
  return checkError(resp);
}

export async function createProduct(item) {
  const resp = await client.from('products').insert({
    title: item.title,
    description: item.description,
    price: item.price,
    image: item.image,
    category: item.category,
    condition: item.condition,
  });
  return checkError(resp);
}

export async function getProductById(id) {
  const resp = await client.from('products').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updateProductById(
  id,
  { title, description, price, image, category, condition }
) {
  const resp = await client
    .from('products')
    .update({ title, description, price, image, category, condition })
    .match({ id });
  return checkError(resp);
}
