import { client, checkError } from './client';

export async function fetchProducts() {
  const resp = await client.from('products').select('*');
  return checkError(resp);
}

// export async function createProduct(item) {
//   const resp = await client.from('products').insert({
//     title: item.title,
//     description: item.description,
//     price: item.price,
//     image: item.image,
//     category: item.category,
//     condition: item.condition,
//   });
//   return checkError(resp);
// }
export async function createProduct({ file, title, description, price, categories, condition }) {
  await client.storage.from('product-image').upload(`public/${file.name}`, file, { upsert: true });

  const { publicURL } = await client.storage
    .from('product-image')
    .getPublicUrl(`public/${file.name}`);

  const resp = await client.from('products').insert({
    title: title,
    description: description,
    price: price,
    category: categories,
    condition: condition,
    image: publicURL,
  });
  console.log('category', categories);
  console.log(resp);
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
  console.log(resp);
  return checkError(resp);
}

export async function deleteProduct(id) {
  const resp = await client.from('products').delete().match({ id });
  return checkError(resp);
}

export async function uploadProductImage(userId, file) {
  const ext = file.name.split('.').pop();

  await client.storage.from('products').upload(`public/${userId}.${ext}`, file, { upsert: true });

  const { publicURL } = await client.storage.from('products').getPublicUrl(`/${userId}.${ext}`);

  const resp = await client.from('users').update({ image: publicURL }).eq('id', userId).single();

  return checkError(resp);
}
