import React, { useState, useEffect } from 'react';
import ProductsCard from '../../components/Products/ProductsCard';
import { fetchProducts } from '../../services/products';

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <ProductsCard products={products} />
    </div>
  );
}
