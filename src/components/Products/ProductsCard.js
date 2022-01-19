import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsCard({ products }) {
  return (
    <div>
      <h1>Products Card</h1>

      {products.map((item) => (
        <div key={item.id}>
          <Link className="productLinks" to={`/products/${item.id}`}>
            <h1>{item.title}</h1>
            <p>{item.condition}</p>
            <p>${item.price}</p>
            <img className="productImages" src={item.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}
