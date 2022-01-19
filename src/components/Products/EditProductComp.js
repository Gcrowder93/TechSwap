import React from 'react';

export default function EditProductComp({
  title,
  setTitle,
  setProduct,
  description,
  price,
  image,
  categories,
  condition,
  onStateChange,
  onSubmit,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => onStateChange(e)}
        />
        {/* <input id="price" type="text" placeholder="Price" value={price} onChange={onChange} />
        <input id="categories" type="text" placeholder="Category" value={categories} />
        <input
          id="condition"
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={onChange}
        />
        <input
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={onChange}
        />
        <input id="image" type="text" placeholder="Image" value={image} onChange={onChange} /> */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
