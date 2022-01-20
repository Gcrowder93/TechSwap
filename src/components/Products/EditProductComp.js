import React from 'react';
import DeleteProduct from '../../views/Product/DeleteProduct';

export default function EditProductComp({
  title,
  description,
  price,
  image,
  categories,
  condition,
  onStateChange,
  onSubmit,
  productToDelete,
  handleDelete,
  id,
}) {
  return (
    <div className="editProductForm">
      <form onSubmit={onSubmit}>
        <input
          name="title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => onStateChange(e)}
        />
        <input
          name="price"
          id="price"
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => onStateChange(e)}
        />
        <input
          name="category"
          id="categories"
          type="text"
          placeholder="Category"
          value={categories}
          onChange={(e) => onStateChange(e)}
        />
        <input
          name="condition"
          id="condition"
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => onStateChange(e)}
        />
        <input
          name="description"
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => onStateChange(e)}
        />
        <input
          name="image"
          id="image"
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => onStateChange(e)}
        />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => handleDelete(id)}>Delete Product</button>
    </div>
  );
}
