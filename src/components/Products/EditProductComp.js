import React from 'react';

export default function EditProductComp({
  title,
  description,
  price,
  categories,
  condition,
  onStateChange,
  onSubmit,
  handleDelete,
  id,
}) {
  return (
    <div className="editProductForm">
      <form onSubmit={onSubmit}>
        <label>Title:</label>
        <input
          name="title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => onStateChange(e)}
        />
        <label>Price:</label>
        <input
          name="price"
          id="price"
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => onStateChange(e)}
        />
        <label>Category:</label>
        <input
          name="category"
          id="categories"
          type="text"
          placeholder="Category"
          value={categories}
          onChange={(e) => onStateChange(e)}
        />
        <label>Condition:</label>
        <input
          name="condition"
          id="condition"
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => onStateChange(e)}
        />
        <label>Description:</label>
        <input
          name="description"
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => onStateChange(e)}
        />
        <label>Image:</label>
        <input
          name="file"
          id="image"
          type="file"
          placeholder="Image"
          onChange={(e) => onStateChange(e)}
        />

        <input className="submit" type="submit" value="Submit" />
      </form>

      <button className="delete" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
