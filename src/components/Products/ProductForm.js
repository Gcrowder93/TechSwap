import React from 'react';

export default function ProductForm({
  title,
  description,
  price,
  image,
  categories,
  condition,
  onSubmit,
  updateProductState,
}) {
  return (
    <form>
      <label>Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => {
          updateProductState('title', e.target.value);
        }}
      />

      <label>Description:</label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={(e) => {
          updateProductState('description', e.target.value);
        }}
      />

      <label>Price:</label>
      <input
        id="price"
        name="price"
        type="number"
        value={price}
        onChange={(e) => {
          updateProductState('price', e.target.value);
        }}
      />

      <label>Image:</label>
      <input
        id="image"
        name="image"
        type="text"
        value={image}
        onChange={(e) => {
          updateProductState('image', e.target.value);
        }}
      />

      <label>Catagory:</label>
      <input
        id="categories"
        name="categories"
        type="text"
        value={categories}
        onChange={(e) => {
          updateProductState('categories', e.target.value);
        }}
      />

      <label>Condition:</label>
      <input
        id="condition"
        name="condition"
        type="text"
        value={condition}
        onChange={(e) => {
          updateProductState('condition', e.target.value);
        }}
      />

      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
