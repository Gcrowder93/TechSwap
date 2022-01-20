import React from 'react';

export default function ProductDetailCard({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} />
      <h3>{product.price}</h3>
      <h3>{product.condition}</h3>
      <p>{product.description}</p>
    </div>
  );
}
