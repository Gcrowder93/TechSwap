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
      <br></br>
      <header>.</header>
      <h1> Product landing page/Home</h1>
      <h2>Displays all products, footer, header</h2>
      <ProductsCard products={products} />
    </div>
  );
}
