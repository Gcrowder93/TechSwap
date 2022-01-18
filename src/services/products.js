import { client, checkError } from './client';

export async function fetchProducts() {
  const resp = await client.from('products').select('*');

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
