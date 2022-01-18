import React from 'react';

export default function ProductForm({
  title,
  description,
  price,
  image,
  catagories,
  condition,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>Title:</label>
      <input id="title" name="title" type="text" value={title} onChange={onChange} />

      <label>Description:</label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={onChange}
      />

      <label>Price:</label>
      <input id="price" name="price" type="text" value={price} onChange={onChange} />

      <label>Image:</label>
      <input id="image" name="image" type="text" value={image} onChange={onChange} />

      <label>Catagory:</label>
      <input id="catagories" name="catagories" type="text" value={catagories} onChange={onChange} />

      <label>Condition:</label>
      <input id="condition" name="condition" type="text" value={condition} onChange={onChange} />
    </form>
  );
}
