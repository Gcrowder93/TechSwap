import React from 'react';

export default function ProductDetailCard({ product }) {
  return (
    <div className="productDetailCard">
      <h1 className="productDetailTitle">{product.title}</h1>
      <img className="productDetailImage" src={product.image} />
      <h3 className="productDetailPrice"> ${product.price}</h3>
      <h3 className="productDetailCondition">{product.condition}</h3>
      <p className="productDetailDescription">{product.description}</p>
    </div>
  );
}
