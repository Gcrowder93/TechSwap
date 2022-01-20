import React from 'react';

export default function EditProductComp({
  title,
  description,
  price,
  file,
  categories,
  condition,
  onStateChange,
  onSubmit,
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
          name="file"
          id="image"
          type="file"
          placeholder="Image"
          onChange={(e) => onStateChange(e)}
        />

        <input type="submit" value="Submit" />
      </form>

      <button>Delete Product</button>
    </div>
  );
}
