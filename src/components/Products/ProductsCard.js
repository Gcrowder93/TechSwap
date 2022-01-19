import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsCard({ products }) {
  return (
    <div>
      <h1 className="productListTitle">Welcome To The Alchemy TechSwap</h1>

      {products.map((item) => (
        <div className="productLists" key={item.id}>
          <Link className="productLinks" to={`/products/${item.id}`}>
            <img className="productImage" src={item.image} />
            <h1 className="productTitle">{item.title}</h1>
            <p className="productCondition">{item.condition}</p>
            <p className="productPrice">${item.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
