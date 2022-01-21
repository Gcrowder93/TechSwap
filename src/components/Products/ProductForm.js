import React from 'react';

export default function ProductForm({
  title,
  description,
  price,
  categories,
  condition,
  onSubmit,
  onChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>Title:</label>
      <input id="title" name="title" type="text" value={title} onChange={(e) => onChange(e)} />

      <label>Description:</label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={(e) => onChange(e)}
      />

      <label>Price:</label>
      <input id="price" name="price" type="number" value={price} onChange={(e) => onChange(e)} />

      <label>Image:</label>
      <input id="image" name="file" type="file" onChange={(e) => onChange(e)} />

      <label>Category:</label>
      <input
        id="categories"
        name="categories"
        type="text"
        value={categories}
        onChange={(e) => onChange(e)}
      />

      <label>Condition:</label>
      <input
        id="condition"
        name="condition"
        type="text"
        value={condition}
        onChange={(e) => onChange(e)}
      />

      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
