import React from 'react';

export default function ProductsCard({ products }) {
  return (
    <div>
      <h1>Products Card</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.condition}</p>
          <p>${item.price}</p>
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}
